import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { studentsReducer } from './state/students.reducer';
import { provideEffects } from '@ngrx/effects';
import { StudentsRecordsEffects } from './state/students-records.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideEffects(StudentsRecordsEffects),
    provideStore(),
    provideState({
      name: 'students',
      reducer: studentsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false})
  ],
};
