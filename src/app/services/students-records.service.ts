import { HttpClient } from '@angular/common/http';
import { StudentsRecords } from '../state/students-records';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class StudentsRecordsService {
  constructor(
    private http: HttpClient
  ){}

  getStudentsRecords() {
    return this.http.get<Array<StudentsRecords>>("http://localhost:3000/api/studentsRecords");
  }
}
