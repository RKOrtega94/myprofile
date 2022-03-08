import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/core/models/course';
import { Extracurricular } from 'src/app/core/models/extracurricular';
import { Job } from 'src/app/core/models/job';
import { Projects } from 'src/app/core/models/projects';
import { Skill } from 'src/app/core/models/skill';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resumeRef;
  coursesRef;
  jobsRef;
  extracurricularRef;
  skillRef;
  projectRef;

  constructor(private firestore: Firestore) {
    this.resumeRef = collection(this.firestore, 'resume');
    this.coursesRef = collection(this.firestore, 'courses');
    this.jobsRef = collection(this.firestore, 'jobs');
    this.extracurricularRef = collection(this.firestore, 'extracurricular');
    this.skillRef = collection(this.firestore, 'skills');
    this.projectRef = collection(this.firestore, 'projects');
  }

  getCourses(): Observable<Course[]> {
    return collectionData(this.coursesRef, { idField: 'id' }) as Observable<
      Course[]
    >;
  }

  getJobs(): Observable<Job[]> {
    return collectionData(this.jobsRef, { idField: 'id' }) as Observable<Job[]>;
  }

  getExtracurricular(): Observable<Extracurricular[]> {
    return collectionData(this.extracurricularRef, {
      idField: 'id',
    }) as Observable<Extracurricular[]>;
  }

  getSkills(): Observable<Skill[]> {
    return collectionData(this.skillRef, { idField: 'id' }) as Observable<
      Skill[]
    >;
  }

  getProjects(): Observable<Projects[]> {
    return collectionData(this.projectRef, { idField: 'id' }) as Observable<
      Projects[]
    >;
  }
}
