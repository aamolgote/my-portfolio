import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {
  public speakingEngagements = [
    {
      name: 'API World 2024',
      title: 'Transforming Lending with Open Banking: A Case Study in Building a Cash Flow Underwriting System',
      photo: 'assets/img/speaking/API-World-2024.jpg',
      presentationLink: 'https://github.com/aamolgote/api-world-2024/blob/main/API-World2024-Presentation.pdf'
    }, 
    {
      name: 'Developer Week 2024',
      title: 'Digital Signatures Decoded Crafting an In-House E-Signing Microservice',
      photo: 'assets/img/speaking/DeveloperWeek2024.png',
      presentationLink: 'https://github.com/aamolgote/itpc-2024/blob/main/Digital-Signatures-Decoded-Crafting-In-House-e-Signing-Microservice.pptx',
      sourceCodeLink: 'https://github.com/iCreateWorks/esigning'
    }, 
    {
      name: 'Code Camp NYC 2018',
      title: 'Building Blockchain D-APPS Using Ethereum, .NET Web API (Microservices) and Angular',
      photo: 'assets/img/speaking/codecampnyc2018.png',
      presentationLink: 'https://github.com/aamolgote/codecampnyc2018/tree/master/PPTX',
      sourceCodeLink: 'https://github.com/aamolgote/codecampnyc2018'
    }, 
    {
      name: 'IEEE IT Professional Conference (ITPC) - 2024',
      title: 'Digital Signatures Decoded Crafting an In-House E-Signing Microservice',
      photo: 'assets/img/speaking/itpc-2024.png',
      presentationLink: 'https://github.com/aamolgote/itpc-2024/blob/main/Digital-Signatures-Decoded-Crafting-In-House-e-Signing-Microservice.pptx',
      sourceCodeLink: 'https://github.com/iCreateWorks/esigning'
    },
    {
      name: 'State Wide Online Workshop for Engg Students (India) - 2024',
      title: 'Git and GitHub 101 Workshop',
      photo: 'assets/img/speaking/git-workshop.png',
      presentationLink: 'https://github.com/aamolgote/github-workshop/blob/main/Git-Hub-WorkShop-1.pptx',
      sourceCodeLink: 'https://github.com/aamolgote/github-workshop'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
