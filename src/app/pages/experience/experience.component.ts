import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public expiriences = [
    { 
      position: 'Solution Architect', 
      dateRange: '2019 - Present',
      company: 'Innova Solutions - Client - iCreditWorks',
      fullDateRange: 'May 2019 - Present day',
      desc: 'Responsible for architecting, building all the back-end infrastructure, horizontal and veritcal microservices, integrating with different AWS cloud services, code reviews, tests, automation'
    },
    { 
      position: 'Senior Full Stack Engineer/Architect', 
      dateRange: '2017 - 2019',
      company: 'Innova Solutions (Data Inc) - Client - Morgan Stanley',
      fullDateRange: 'April 2017 - May 2019',
      desc: 'Consultation, full stack design and development, building microservices. Collaborating on project to migrate multiple IT service management applications to Service Now portal'
    },
    { 
      position: 'Senior Software Engineer', 
      dateRange: '2016 - 2017',
      company: 'Innova Solutions (Data Inc) - Client - Microsoft',
      fullDateRange: 'Nov 2016 - April 2017',
      desc: 'Worked as member of System Reliability and Engineering (SRE) team as Senior Software Engineer, helped in enhanching APIs. Designed and developed Dev ops tool which provides ability to run checklist scripts to perform system health checks'
    },
    { 
      position: 'Senior Software Engineer', 
      dateRange: '2015 - 2016',
      company: 'Innova Solutions (Data Inc) - Client - Associated Press',
      fullDateRange: 'Sep 2010 - May 2013',
      desc: 'Implemented end-to-end Web Sockets using Signal R, and built microservices using ASP.NET Web API. Created and developed Angular JS reusable UI widgets and assisted team members with development and best practices.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
