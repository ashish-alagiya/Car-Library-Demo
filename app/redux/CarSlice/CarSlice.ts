import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CarType } from '../../types';
import { getAllCars } from '../../api/CarApis';

interface CarState {
  cars: CarType[];
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCars();
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch cars');
    }
  },
);

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleCarType: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.cars.findIndex(car => car.id === action.payload.id);
      if (index !== -1) {
        const currentType = state.cars[index].carType;
        state.cars[index].carType =
          currentType === 'automatic' ? 'manual' : 'automatic';
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCars.fulfilled,
        (state, action: PayloadAction<CarType[]>) => {
          state.loading = false;
          state.cars = action.payload;
        },
      )
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleCarType } = carSlice.actions;
export const carSliceReducer = carSlice.reducer;
