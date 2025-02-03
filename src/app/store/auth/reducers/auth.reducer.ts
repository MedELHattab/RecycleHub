import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './../actions/auth.actions';
import { User } from '../../../core/models/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,

  // When registering or logging in, set loading to true.
  on(AuthActions.registerUser, AuthActions.loginUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // On successful registration or login, store the user.
  on(AuthActions.registerUserSuccess, AuthActions.loginUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),

  // On failure, store the error.
  on(AuthActions.registerUserFailure, AuthActions.loginUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Logout clears the user.
  on(AuthActions.logoutUser, (state) => ({
    ...state,
    user: null,
  }))
);
