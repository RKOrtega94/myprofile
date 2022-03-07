import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {}
}
