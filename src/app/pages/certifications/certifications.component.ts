import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  public educations = [
    {
      name: '',
      dateRange: '2021',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/certifications/aws-certified-solutions-architect-associate.png'
    },
    {
      name: 'Masters of Data Science',
      dateRange: '2019 - 2020',
      centre: 'Merrimack College',
      location: 'Massachusetts, USA',
      desc: ''
    },
    {
      name: '',
      dateRange: '2018',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/certifications/aws-certified-solutions-architect-associate.png'
    },
    {
      name: '480 - Programming in HTML5 with JavaScript and CSS3',
      dateRange: 'Dec 18, 2015',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '487 - Developing Microsoft Azure and Web Services',
      dateRange: 'May 3, 2013',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '486 - Developing ASP.NET MVC Web Applications',
      dateRange: 'Jan 15, 2013',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '516 - TS: Accessing Data with Microsoft .NET Framework 4',
      dateRange: 'Apr 9, 2012',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '583 - PRO: Designing and Developing Windows Azure Applications',
      dateRange: 'Jun 4, 2011',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '513 - TS: Windows Communication Foundation Development with Microsoft .NET Framework 4',
      dateRange: 'Mar 25, 2011',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '515 - TS: Web Applications Development with Microsoft .NET Framework 4',
      dateRange: 'Mar 4, 2011',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '433 - TS: Microsoft SQL Server 2008, Database Development',
      dateRange: 'May 28, 2010',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '564 - PRO: Designing and Developing ASP.NET Applications using Microsoft .NET Framework 3.5',
      dateRange: 'May 8, 2010',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '504 - TS: Microsoft .NET Framework 3.5, Workflow',
      dateRange: 'Feb 13, 2010',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '502 - TS: Microsoft .NET Framework 3.5, Windows Presentation Foundation Application Development',
      dateRange: 'Jan 16, 2010',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '503 - TS: Microsoft .NET Framework 3.5, Windows Communication Foundation Application Development',
      dateRange: 'Jan 30, 2009',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '562 - TS: Microsoft .NET Framework 3.5, ASP.NET Application Development',
      dateRange: 'Dec 8, 2008',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '445 - TS: Microsoft SQL Server 2005 Business Intelligence–Implementation and Maintenance',
      dateRange: 'Aug 25, 2008',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '547 - PRO: Designing and Developing Web-based Applications by Using the Microsoft .NET Framework',
      dateRange: 'Jul 3, 2008',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '431 - TS: Microsoft SQL Server™ 2005 - Implementation and Maintenance',
      dateRange: 'May 21, 2008',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '528 - TS: Microsoft .NET Framework 2.0 - Web-based Client Development',
      dateRange: 'Apr 17, 2008',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    },
    {
      name: '536 - TS: Microsoft .NET Framework - Application Development Foundation',
      dateRange: 'Oct 22, 2007',
      centre: '',
      location: '',
      desc: '',
      imageUrl: 'assets/img/clients/microsoft.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
