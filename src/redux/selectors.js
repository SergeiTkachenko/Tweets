import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFilter = state => state.filter;

export const selectSortUsers = createSelector(
  [selectUsers, selectFilter],
  users => {
    const sortedUsers = [...users];
    if (sortedUsers.length === 0) {
      return sortedUsers;
    }
    return sortedUsers.sort((a, b) => a.user.localeCompare(b.user));
  }
);
