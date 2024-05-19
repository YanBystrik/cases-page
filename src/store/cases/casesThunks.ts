import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';
import { Case } from './casesTypes';

export const getCases = createAsyncThunk<{ Data: Case[]; Error: null | string }>(
  'cases/getCases',
  async (_, thunkApi) => {
    try {
      const response = await api.cases.getCases();
      return response;
    } catch (error) {
      console.error(error);

      return thunkApi.rejectWithValue('Something went wrong');
    }
  },
);
