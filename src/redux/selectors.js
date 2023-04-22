import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filterValue) => {
    const filteredUsers = users.filter(user =>
      user.user.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
    return filteredUsers.sort((a, b) => a.user.localeCompare(b.user));
  }
);

// export const selectSortedUsers = createSelector([selectUsers], users => {
//   return users.sort((a, b) => a.user.localeCompare(b.user));
// });
