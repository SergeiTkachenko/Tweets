import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(contact =>
      contact.user.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
    return filteredContacts.sort((a, b) => a.user.localeCompare(b.user));
  }
);
