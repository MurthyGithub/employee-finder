import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../scripts/client'


export const fetchEmployees = createAsyncThunk('/getEmployees', async () => {
  const response = await client.get('http://localhost:3001/employees')
  return response.data
})

export const employeeSlice = createSlice({
    name: 'employeesInfo',
    initialState: {
      data: undefined,
      status: 'init',
      error: undefined
    },
    reducers: {
      setEmployeeById: (state, payload) => {
        state.data.find((employee) => employee.id === payload.id ? payload : employee);
      },         
    },
    extraReducers(builder) {
      builder
        .addCase(fetchEmployees.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }   
  });
 
export const { setEmployeeById } = employeeSlice.actions;

