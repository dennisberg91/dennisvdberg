import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../structure/project';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json'
  })
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  activeProject: Project;
  searchText;
  projectDetail: Boolean = false;
  imageURL: string;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get_projects();
  }

  get_projects() {
    this.http.get('http://cms.dennisvdberg.nl/jsonapi/node/projects')
    .subscribe((projectsData)=>{
        this.mapProjects(projectsData);
    });
  }

  mapProjects(projectsData) {
    const projectCount = Object.keys(projectsData.data).length;
    for (let i = 0; i < projectCount; i++) {
      this.http.get('http://cms.dennisvdberg.nl/jsonapi/node/projects/' + projectsData.data[i].id + '?include=field_image')
      .subscribe((imageData)=>{
        this.mapProject(projectsData.data[i].attributes, imageData);
      });
    }
  }

  get_project(project) {
    this.activeProject = project;
  }

  mapProject(projectData, imageData) {
    const project = new Project();

    project.title = projectData.title;
    project.body = projectData.body.value;
    project.status = projectData.status;
    project.image = 'http://cms.dennisvdberg.nl' + imageData.included[0].attributes.uri.url;

    this.projects.push(project);
  }

  unset_project() {
    this.activeProject = null;
  }
}
