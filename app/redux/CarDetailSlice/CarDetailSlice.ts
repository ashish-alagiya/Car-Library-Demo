import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Car, CreateCarPayload } from '../../types';
import { createCar, getCarById } from '../../api/CarApis';

interface CarDetailState {
  car: Car | null;
  isLoading: boolean;
  error: string | null;
  isCreating: boolean;
}

const initialState: CarDetailState = {
  car: null,
  isLoading: false,
  error: null,
  isCreating: false,
};

// Fetch Car Detail
export const fetchCarById = createAsyncThunk<Car, number>(
  'carDetail/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await getCarById(id);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

// Create Car
export const createNewCar = createAsyncThunk<Car, CreateCarPayload>(
  'carDetail/createCar',
  async (payload, { rejectWithValue }) => {
    try {
      return await createCar(payload);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

const carDetailSlice = createSlice({
  name: 'carDetail',
  initialState,
  reducers: {
    clearCarDetail: state => {
      state.car = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch Car data
      .addCase(fetchCarById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Create new car
      .addCase(createNewCar.pending, state => {
        state.isCreating = true;
        state.error = null;
      })
      .addCase(createNewCar.fulfilled, (state, action) => {
        state.isCreating = false;
        state.car = action.payload;
      })
      .addCase(createNewCar.rejected, (state, action) => {
        state.isCreating = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCarDetail } = carDetailSlice.actions;
export default carDetailSlice.reducer;
