import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/models/user.model';

export const registerUser = createAction(
  '[Auth] Register User',
  props<{ user: User }>()
);

export const registerUserSuccess = createAction(
  '[Auth] Register User Success',
  props<{ user: User }>()
);

export const registerUserFailure = createAction(
  '[Auth] Register User Failure',
  props<{ error: any }>()
);

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ email: string; password: string }>()
);

export const loginUserSuccess = createAction(
  '[Auth] Login User Success',
  props<{ user: User }>()
);

export const loginUserFailure = createAction(
  '[Auth] Login User Failure',
  props<{ error: any }>()
);

export const logoutUser = createAction('[Auth] Logout User');
