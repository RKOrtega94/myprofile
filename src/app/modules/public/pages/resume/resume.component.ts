import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { Extracurricular } from 'src/app/core/models/extracurricular';
import { Job } from 'src/app/core/models/job';
import { ResumeService } from 'src/app/shared/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  courses: Course[] = [];
  jobs: Job[] = [];
  extracurricular: Extracurricular[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.getCourses();
    this.getJobs();
    this.getExtracurricular();
  }

  getCourses(): void {
    this.resumeService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  getJobs(): void {
    this.resumeService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  getExtracurricular(): void {
    this.resumeService.getExtracurricular().subscribe((extracurricular) => {
      this.extracurricular = extracurricular;
    });
  }
}
