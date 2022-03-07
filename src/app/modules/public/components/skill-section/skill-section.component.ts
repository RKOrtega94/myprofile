import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
})
export class SkillSectionComponent implements OnInit {
  skills: Skill[] = [
    { id: '1', name: 'Angular', percentage: '90%' },
    { id: '2', name: 'React', percentage: '80%' },
    { id: '3', name: 'Vue', percentage: '70%' },
    { id: '4', name: 'Node', percentage: '60%' },
    { id: '5', name: 'Express', percentage: '50%' },
    { id: '6', name: 'MongoDB', percentage: '40%' },
    { id: '7', name: 'MySQL', percentage: '30%' },
    { id: '8', name: 'Firebase', percentage: '20%' },
    { id: '9', name: 'AWS', percentage: '10%' },
    { id: '10', name: 'Docker', percentage: '0%' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
