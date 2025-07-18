import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CarType } from '../../types';
import {
  deleteCar,
  getAllCars,
  getCarTags,
  getCarTypes,
} from '../../api/CarApis';

interface CarState {
  cars: CarType[];
  loading: boolean;
  deleting: boolean;
  tagsLoading: boolean;
  typesLoading: boolean;
  error: string | null;
  tags: string[];
  types: string[];
}

const initialState: CarState = {
  cars: [],
  loading: false,
  deleting: false,
  tagsLoading: false,
  typesLoading: false,
  error: null,
  tags: [],
  types: [],
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

export const fetchCarTags = createAsyncThunk<string[]>(
  'carList/fetchCarTags',
  async (_, { rejectWithValue }) => {
    try {
      return await getCarTags();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchCarTypes = createAsyncThunk<string[]>(
  'carList/fetchCarTypes',
  async (_, { rejectWithValue }) => {
    try {
      return await getCarTypes();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

export const deleteCarById = createAsyncThunk<number, number>(
  'carList/deleteCar',
  async (id, { rejectWithValue }) => {
    try {
      await deleteCar(id);
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message);
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
    setFilteredCars: (state, action: PayloadAction<CarType[]>) => {
      state.cars = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch cars
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
      })

      // Fetch car tags
      .addCase(fetchCarTags.pending, state => {
        state.tagsLoading = true;
        state.error = null;
      })
      .addCase(fetchCarTags.fulfilled, (state, action) => {
        state.tagsLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchCarTags.rejected, (state, action) => {
        state.tagsLoading = false;
        state.error = action.payload as string;
      })

      // Fetch car types
      .addCase(fetchCarTypes.pending, state => {
        state.typesLoading = true;
        state.error = null;
      })
      .addCase(fetchCarTypes.fulfilled, (state, action) => {
        state.typesLoading = false;
        state.types = action.payload;
      })
      .addCase(fetchCarTypes.rejected, (state, action) => {
        state.typesLoading = false;
        state.error = action.payload as string;
      })

      // Delete car
      .addCase(deleteCarById.pending, state => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteCarById.fulfilled, (state, action) => {
        state.deleting = false;
        state.cars = state.cars.filter(car => car.id !== action.payload);
      })
      .addCase(deleteCarById.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload as string;
      })
  },
});

export const { toggleCarType, setFilteredCars } = carSlice.actions;
export const carSliceReducer = carSlice.reducer;
