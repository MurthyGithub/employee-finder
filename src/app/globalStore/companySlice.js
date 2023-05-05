import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../scripts/client'

export const companySlice = createSlice({
    name: 'companyInfo',
    initialState: {      
        data: undefined,
        status: 'init',
        error: undefined          
    },
    reducers: {
      updateCompany: (state, payload) => {
        return state.companyInfo.data = payload;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCompany.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(fetchCompany.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchCompany.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
});

export const fetchCompany = createAsyncThunk('/getCompany', async () => {
  const response = await client.get('http://localhost:3001/company')
  return response.data
})

export const { updateCompany } = companySlice.actions;
