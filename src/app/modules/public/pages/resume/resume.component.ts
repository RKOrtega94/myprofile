import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  courses: Course[] = [
    {
      id: 1,
      title: 'Backend con PHP',
      school: 'Platzi, virtual',
      description:
        'Diploma de la Ruta de Aprendizaje de Desarrollo Web Backend con PHP',
      url: 'https://platzi.com/p/rk-ortega/ruta/10-desarrollo-php/diploma/detalle/',
      date: 2020,
      isCurrent: false,
    },
    {
      id: 2,
      title: 'Escuela de JavaScript',
      school: 'Platzi, virtual',
      description: 'Diploma de la Escuela de JavaScript',
      url: 'https://platzi.com/p/rk-ortega/ruta/100-escuela-javascript/diploma/detalle/',
      date: 2020,
      isCurrent: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
