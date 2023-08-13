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
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
