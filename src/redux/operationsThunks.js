import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  postContact,
  deleteСontact,
  updateСontact,
} from './api/requests';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const addContact = createAsyncThunk('contacts/addContact', newContact =>
  postContact(newContact)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  deleteСontact(id)
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, body }, { rejectWithValue }) => {
    try {
      return await updateСontact(id, body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
