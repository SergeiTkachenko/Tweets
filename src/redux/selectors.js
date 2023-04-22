import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  users => {
    const filteredUsers = [...users];
    if (filteredUsers.length === 0) {
      return filteredUsers;
    }
    return filteredUsers.sort((a, b) => a.user.localeCompare(b.user));
  }
);
