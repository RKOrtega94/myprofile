import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';
import { ResumeService } from 'src/app/shared/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  courses: Course[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
