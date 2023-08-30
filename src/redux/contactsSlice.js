import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operationsThunks';
import { toast } from 'react-hot-toast';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        // state.items.unshift(payload);
        state.items.push(payload);
        toast.success('Contact added successfully');
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(el => el.id === payload.id);
        state.items.splice(index, 1);
        toast.success('Contact deleted successfully');
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(el => el.id === payload.id);
        state.items[index] = payload;
        toast.success('Contact updated successfully');
        
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error.message;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
