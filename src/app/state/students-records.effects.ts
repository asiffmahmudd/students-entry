import { actionsList } from './students-records.action';
import { inject, Injectable } from "@angular/core";
import { StudentsRecordsService } from "../services/students-records.service";
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class StudentsRecordsEffects {

  private actions$ = inject(Actions);

  loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
    ofType(actionsList.callStudentsRecordsApi),
    exhaustMap(() => this.studentsRecordsService.getStudentsRecords()
    .pipe(
      map(studentsRecords => ({ type:actionsList.callStudentsRecordsApiSuccess, payload: studentsRecords })),
      catchError(() => EMPTY)
    )
    )
  ))

  constructor(
    private studentsRecordsService: StudentsRecordsService
  ){}
}
