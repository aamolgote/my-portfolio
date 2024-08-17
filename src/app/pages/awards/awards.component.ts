import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  person: string = 'assets/img/person.png';
  public awards = [
    
    {
      title: 'Titan Platinum Award - 2024',
      desc: 'Financial Services - Solutions Architect - Transforming Dental Care Financing',
      type: 'img',
      imagePath: '/assets/img/awards/TITAN-Platinum.jpg'
    },
    {
      title: 'Titan Platinum Award - 2024',
      desc: 'IT - Consultation - Solutions Architect - Pioneering Fintech Innovation, Impact',
      type: 'img',
      imagePath: '/assets/img/awards/TITAN-Platinum.jpg'
    },
    {
      title: 'Titan Gold Award - 2024',
      desc: 'Information Technology - Technical Professional of the Year',
      type: 'img',
      imagePath: '/assets/img/awards/TITAN-Gold.jpg'
    },
    {
      title: 'The Stevie® Awards for Technology Excellence - 2024',
      desc: 'Employee of the Year - Financial Technology - Solutions Architect - Transforming Dental Care Financing',
      type: 'img',
      imagePath: '/assets/img/awards/Stevie_Gold_Winner.png'
    },
    {
      title: 'Globee Technology Silver Award - 2024',
      desc: 'IT Consultant of the Year',
      type: 'img',
      imagePath: '/assets/img/awards/Globee-Silver-Badge.png'
    },
    {
      title: 'Globee Technology Bronze Award - 2024',
      desc: 'Professional of the Year - IT Services',
      type: 'img',
      imagePath: '/assets/img/awards/Globee-Bronze-Badge.png'
    },
    {
      title: 'Golden Bridge Bronze Award - 2024',
      desc: 'IT Professional of the Year (non-executive)',
      type: 'img',
      imagePath: '/assets/img/awards/Globee-Bronze-Badge.png'
    },
    {
      icon: 'auto_awesome',
      title: '2024 Global Recognition Award',
      desc: 'Award highlights achievements at iCreditWorks and contributions to the FinTech domain',
      type: 'icon'
    },
    {
      icon: 'star_border_purple500',
      title: 'International Achievers Award - 2023',
      desc: 'Recognizes exceptional achievements, technological innovations and contributions',
      type: 'icon'
    },
    {
      icon: 'military_tech',
      title: 'GPGP - Great People Great Performance',
      desc: 'Exemplary performance on the Lexis Nexis Advance Project at Microsoft in 2012.',
      type: 'icon'
    },
    {
      icon: 'emoji_events',
      title: 'Growth Engine Award',
      desc: 'For pre-sales work at Microsoft in 2012. This was awarded to a team.',
      type: 'icon'
    },
    {
      icon: 'grade',
      title: 'CPE Champion Award',
      desc: 'Excellent customer feedback award at Microsoft for work done with Merrill Lynch in 2008.',
      type: 'icon'
    },
    {
      icon: 'stars',
      title: 'Delivery Excellence award',
      desc: 'Team award for delivery excellence for eCommerce Platform upgrade project.',
      type: 'icon'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}