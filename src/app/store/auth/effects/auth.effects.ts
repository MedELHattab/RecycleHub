import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { DataService } from '../../../core/services/data.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService // This service simulates persistence (local storage/JSON)
  ) {}

  // Effect for handling user registration.
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      mergeMap((action) =>
        this.dataService.registerUser(action.user).pipe(
          map((user) => AuthActions.registerUserSuccess({ user })),
          catchError((error) => of(AuthActions.registerUserFailure({ error })))
        )
      )
    )
  );

  // Effect for handling user login.
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      mergeMap((action) =>
        this.dataService.loginUser(action.email, action.password).pipe(
          map((user) => {
            if (user) {
              return AuthActions.loginUserSuccess({ user });
            }
            return AuthActions.loginUserFailure({ error: 'Invalid credentials' });
          }),
          catchError((error) => of(AuthActions.loginUserFailure({ error })))
        )
      )
    )
  );
}
