import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  person:string = 'assets/img/person.png'; 
  public awards = [
    { 
      icon: 'star_border_purple500', 
      title: 'International Achievers Award - 2023', 
      desc: 'Recognizes exceptional achievements, technological innovations and contributions'
    },
    { 
      icon: 'military_tech', 
      title: 'GPGP - Great People Great Performance', 
      desc: 'Exemplary performance on the Lexis Nexis Advance Project at Microsoft in 2012.'
    },
    { 
      icon: 'emoji_events', 
      title: 'Growth Engine Award', 
      desc: 'For pre-sales work at Microsoft in 2012. This was awarded to a team.'
    },
    { 
      icon: 'grade', 
      title: 'CPE Champion Award', 
      desc: 'Excellent customer feedback award at Microsoft for work done with Merrill Lynch in 2008.'
    },
    { 
      icon: 'stars', 
      title: 'Delivery Excellence award', 
      desc: 'Team award for delivery excellence for eCommerce Platform upgrade project.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}