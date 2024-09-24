import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  person:string = 'assets/img/Stevie-Stage-Photo.png'; 
  public services = [
    { 
      icon: 'computer', 
      title: 'Microservices', 
      desc: 'Building scalable, resilient microservices. Have a unique experience in building microservices in .NET and Java for last 7+ years.'
    },
    { 
      icon: 'repeat', 
      title: 'Web Sockets', 
      desc: 'Built micros services using web sockets to deliver seamless interactive experience between 2 parties.'
    },
    { 
      icon: 'cloud', 
      title: 'Cloud Services', 
      desc: 'Skilled in deploying and managing microservices in AWS and Azure environments. Integrating with different AWS cloud services'
    },
    { 
      icon: 'event', 
      title: 'Event Driven Services', 
      desc: 'Use Kafka, AWS SQS, Azure Service Bus to facilitate the communication between microservices through events.'
    },
    { 
      icon: 'web', 
      title: 'Front end', 
      desc: 'Front-end development focuses on building the visual and interactive web apps, utilizing frameworks like Angular.'
    },
    { 
      icon: 'code', 
      title: 'Programming', 
      desc: 'Spring Java, C#, Angular, ASP.NET Web API/MVC/CORE, Signal R, Electron, Node JS, Amazon Cloud Services, Azure services'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}