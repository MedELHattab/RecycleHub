import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

// Select the 'auth' slice of state
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selector to get the current user
export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

// Selector to get the loading status
export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);

// Selector to get the authentication error
export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
