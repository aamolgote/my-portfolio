import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public statistics = [
    { 
      icon: 'engineering', 
      title: 'Microservices built', 
      count: '50+'
    },
    { 
      icon: 'assignment_ind', 
      title: 'Projects', 
      count: '15+'
    },
    { 
      icon: 'category', 
      title: 'Products Built', 
      count: '1 (4+ years)'
    },
    { 
      icon: 'construction', 
      title: 'Tools and Technologies', 
      count: '35+'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
