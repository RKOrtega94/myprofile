import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';
import { ResumeService } from 'src/app/shared/services/resume.service';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss'],
})
export class SkillSectionComponent implements OnInit {
  skills: Skill[] = [];
  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.skills.forEach((skill) => {
        skill.percentage = this.skillLevelToPercentage(skill.level);
        skill.color = this.skillLevelToColor(skill.level);
      });
    });
  }

  skillLevelToPercentage(level: string): string {
    switch (level) {
      case 'Beginner':
        return '25%';
      case 'Intermediate':
        return '50%';
      case 'Advanced':
        return '75%';
      case 'Expert':
        return '100%';
      default:
        return '0%';
    }
  }

  skillLevelToColor(level: string): string {
    switch (level) {
      case 'Beginner':
        return '#FF6D00';
      case 'Intermediate':
        return '#ADD8E6';
      case 'Advanced':
        return '#0000FF';
      case 'Expert':
        return '#00FF00';
      default:
        return '#FFD600';
    }
  }
}
