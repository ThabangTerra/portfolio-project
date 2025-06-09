import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item/portfolio-item.module';
import { ResumeItem } from '../models/resume-item/resume-item.module';
import { ServiceItem } from '../models/service-item/service-item.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

    getPortfolioItems(): PortfolioItem[] {
    return [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description for project 1',
        imageUrl: 'assets/img/portfolio/portfolio-1.jpg',
        category: 'app'
      },
      // Add more portfolio items
    ];
  }

  getResumeItems(): ResumeItem[] {
    return [
      {
        id: 1,
        title: 'Master of Computer Science',
        period: '2015 - 2017',
        organization: 'University of Technology',
        description: 'Specialized in Web Development',
        isEducation: true
      },
      // Add more resume items
    ];
  }

  getServiceItems(): ServiceItem[] {
    return [
      {
        id: 1,
        title: 'Web Design',
        description: 'Professional web design services',
        icon: 'bi bi-code-slash'
      },
      // Add more service items
    ];
  }
}
