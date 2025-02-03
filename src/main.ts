import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from './app/app.component';
import { authReducer } from './app/store/auth//reducers/auth.reducer';
import { AuthEffects } from './app/store/auth/effects/auth.effects';

bootstrapApplication(AppComponent, {
  providers: [
    // Provide NgRx Store with the auth feature reducer
    provideStore({ auth: authReducer }),
    
    // Provide NgRx Effects with the authentication effects
    provideEffects([AuthEffects]),
    
  ],
});

