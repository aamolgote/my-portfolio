import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {
  public speakingEngagements = [
    {
      name: 'Code Camp NYC 2018',
      title: 'Building Blockchain D-APPS Using Ethereum, .NET Web API (Microservices) and Angular',
      photo: 'assets/img/speaking/codecampnyc2018.png',
      presentationLink : 'https://github.com/aamolgote/codecampnyc2018/tree/master/PPTX',
      sourceCodeLink: 'https://github.com/aamolgote/codecampnyc2018'
    },{
      name: 'IEEE IT Professional Conference (ITPC) - 2024',
      title: 'Digital Signatures Decoded Crafting an In-House E-Signing Microservice',
      photo: 'assets/img/speaking/itpc-2024.png',
      presentationLink : 'https://github.com/aamolgote/itpc-2024/blob/main/Digital-Signatures-Decoded-Crafting-In-House-e-Signing-Microservice.pptx',
      sourceCodeLink: 'https://github.com/iCreateWorks/esigning'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
