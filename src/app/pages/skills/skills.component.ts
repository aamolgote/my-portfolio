import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills = [
    {
      name: 'Microservices - APIs',
      items: [
        { name: 'Spring Java', value: 90 },
        { name: '.NET Web API', value: 90 },
        { name: 'WCF', value: 80 },
        { name: 'ASP.NET MVC / WebServices (ASMX)', value: 70 }
      ]
    },
    {
      name: 'Languages',
      items: [
        { name: 'C#', value: 90 },
        { name: 'Java', value: 90 },
        { name: 'Angular / JavaScript', value: 80 },
        { name: 'Javascript / Typescript', value: 80 },

      ]
    },
    {
      name: 'Microservices - APIs Tools',
      items: [
        { name: 'Postman', value: 90 },
        { name: 'Swagger UI', value: 70 },
        { name: 'JMeter', value: 40 },
        { name: 'cURL', value: 30 }
      ]
    },
    {
      name: 'Messaging',
      items: [
        { name: 'Kafka', value: 80 },
        { name: 'AWS SQS', value: 80 },
        { name: 'AWS SNS/SES', value: 70 },
        { name: 'Azure Service Bus', value: 70 }
      ]
    },
    {
      name: 'Databases (SQL/NoSQL)',
      items: [
        { name: 'MYSQL', value: 80 },
        { name: 'Microsoft SQL SERVER', value: 90 },
        { name: 'MongoDB', value: 60 },
        { name: 'Oracle', value: 10 }
      ]
    },
    {
      name: 'Testing',
      items: [
        { name: 'MockITo-Java', value: 90 },
        { name: 'Moq-.NET', value: 70 },
        { name: 'Perfomance Testing', value: 70 },
        { name: 'Unit and Integrations testing', value: 70 }
      ]
    },
    {
      name: 'Cloud Services',
      items: [
        { name: 'AWS S3', value: 80 },
        { name: 'AWS RDS Aurora', value: 70 },
        { name: 'AWS Lambda', value: 70 },
        { name: 'AWS SNS', value: 70 }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
