import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  person:string = 'assets/img/person.png'; 
  public services = [
    { 
      icon: 'computer', 
      title: 'Microservices', 
      desc: 'Building scalable, resilient microservices. Have a unique experience in building microservices in .NET and Java for last 7+ years.'
    },
    { 
      icon: 'palette', 
      title: 'Web Sockets', 
      desc: 'Built micros services using web sockets to deliver seamless interactive experience between 2 parties.'
    },
    { 
      icon: 'photo_camera', 
      title: 'Cloud Services', 
      desc: 'Skilled in deploying and managing microservices in AWS and Azure environments. Integrating with different AWS cloud services'
    },
    { 
      icon: 'queue_music', 
      title: 'Event Driven Services', 
      desc: 'Use Kafka, AWS SQS, Azure Service Bus to facilitate the communication between microservices through events.'
    },
    { 
      icon: 'volume_up', 
      title: 'Advertising', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    },
    { 
      icon: 'contact_support', 
      title: 'Support', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}