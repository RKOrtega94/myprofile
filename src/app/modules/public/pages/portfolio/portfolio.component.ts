import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/core/models/projects';
import { ResumeService } from 'src/app/shared/services/resume.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
