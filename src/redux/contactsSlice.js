// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   addContact,
//   delContact,
//   editContact,
// } from './operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.unshift(action.payload);
//       })
//       .addCase(delContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(editContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1, action.payload);
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           delContact.pending,
//           editContact.pending
//         ),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           delContact.rejected,
//           editContact.rejected
//         ),
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

///////////////////////////////////////////////////////////////////////////////////////

import { createSlice } from '@reduxjs/toolkit';
import {
  // addContact,
  // deleteContact,
  // editContact,
  fetchUsers,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const usersSlice = createSlice({
  name: 'users',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchUsers.pending]: handlePending,
    // [addContact.pending]: handlePending,
    // [deleteContact.pending]: handlePending,
    // [editContact.pending]: handlePending,

    [fetchUsers.fulfilled](state, action) {
      handleFulfilled(state);
      state.items = action.payload;
    },
    // [addContact.fulfilled](state, action) {
    //   handleFulfilled(state);
    //   state.items.push(action.payload);
    // },
    // [deleteContact.fulfilled](state, action) {
    //   handleFulfilled(state);
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [editContact.fulfilled](state, action) {
    //   handleFulfilled(state);
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },

    [fetchUsers.rejected]: handleRejected,
    // [addContact.rejected]: handleRejected,
    // [deleteContact.rejected]: handleRejected,
    // [editContact.rejected]: handleRejected,
  },
});

export const usersReducer = usersSlice.reducer;
