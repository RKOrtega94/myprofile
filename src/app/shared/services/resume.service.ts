import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/models/course';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumeRef;
  coursesRef;

  constructor(private firestore: Firestore) {
    this.resumeRef = collection(this.firestore, 'resume');
    this.coursesRef = collection(this.firestore, 'courses');
  }

  getCourses(): Observable<Course[]> {
    return collectionData(this.coursesRef, { idField: 'id' }) as Observable<
      Course[]
    >;
  }
}
