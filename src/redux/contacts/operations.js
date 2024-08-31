import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { goitApi } from '../../config/goitApi';

// axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk(
  '/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await goitApi.post('/contacts/', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);