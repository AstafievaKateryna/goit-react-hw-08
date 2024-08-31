import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
    items:[],
};
      
const slice = createSlice({
    name: 'contacts',
    initialState,
    loading: false,
    error: null,

    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            })
            .addCase(logoutThunk.fulfilled, () => {
            return initialState;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(
            (contact) => contact.id !== action.payload
        );
      });
    }
});

export const contactsReducer = slice.reducer;