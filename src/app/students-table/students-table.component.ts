import { callStudentsRecordsApi } from './../state/students-records.action';
import { StudentsRecords } from './../state/students-records';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAll } from '../state/students.selector';
import * as Actions from "../state/students-records.action";

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent implements OnInit {
  dataSource: any = [];
  dataSource$: Observable<StudentsRecords[]>;
  displayColumns: string[] = [
    'name',
    'city',
    'country',
    'subject',
    'passportDeclaration',
    'fitnessDeclaration',
    'courseName',
    'date',
    'state',
    'subjects',
    'street',
    'email',
    'phone',
    'postalCode',
  ];
  constructor(private store: Store<AppState>) {
    this.store.dispatch(Actions.callStudentsRecordsApi());
    this.dataSource$ = this.store.select(selectAll);
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res?.studentsRecords;
    });
  }
}
