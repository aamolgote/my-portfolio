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
    },
    { 
      position: 'Consultant', 
      dateRange: '2014 - 2015',
      company: 'Innova Solutions (Data Inc) - Client - Bank Of America (Merrill Lynch)',
      fullDateRange: 'Feb 2014 - Sept 2015',
      desc: 'Served as Lead for UF (Unified Framework) and Dev Contributor to client-side framework using Angular JS, Designed and developed Aggregator framework for API driven user interface'
    },
    { 
      position: 'Consultant', 
      dateRange: '2014 - 2015',
      company: 'Microsoft - Client - Public Sector',
      fullDateRange: 'Jan 2013 - Jan 2014',
      desc: 'Developed Connect360 solution, using Azure Service Bus, Azure Workflow Manager. Provided end-to-end delivery to one of the counties in US'
    },
    { 
      position: 'Consultant', 
      dateRange: '2011 - 2012',
      company: 'Microsoft - Client - Lexis Nexis',
      fullDateRange: 'June 2011 - Dec 2012',
      desc: 'Served as Dev Lead in a refactoring and performance enhancement for LexisNexis Advance platform.'
    },
    { 
      position: 'Associate Consultant', 
      dateRange: '2009 - 2011',
      company: 'Microsoft - Client - Bank Of America (Merrill Lynch)',
      fullDateRange: 'Sept 2009 - June 2011',
      desc: 'Multiple projects, including FAST Structured data search, Market Data Framework POC, Next Generation Statements, Ajax Instrumentation and Sym Instrumentation framework'
    },
    { 
      position: 'Associate Consultant', 
      dateRange: '2009 - 2009',
      company: 'Microsoft - Client - Punjab State Goverment',
      fullDateRange: 'Jan 2009 - Sept 2009',
      desc: 'This project was for registration of deeds (ROD) for Punjab government, this was getting executed by Microsoft Partner and my role was overseeing the overall project from technology apect and had played advisory role.'
    },
    { 
      position: 'Associate Consultant', 
      dateRange: '2007 - 2008',
      company: 'Microsoft - Client - BestBuy Canada',
      fullDateRange: 'Feb 2007 - Dec 2008',
      desc: 'Module lead for building Web Services based new e-Commerce platform for BestBuy Canada.'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
