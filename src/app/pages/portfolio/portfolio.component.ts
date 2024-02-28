import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
declare var Isotope: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  isotope:any;
  filter = 'all';
  items = [
    { name: 'Project name', type: 'design', src: '/assets/img/design/Partnerservicedown-Page-3.png'},
    { name: 'Project name', type: 'design', src: '/assets/img/design/edelivery-1.png'},
    { name: 'Project name', type: 'design', src: '/assets/img/design/CoreNotificationService..png'},
    { name: 'Project name', type: 'design', src: '/assets/img/design/CashFlow-UW.png'},
    { name: 'Project name', type: 'design', src: '/assets/img/design/Interactive-WebApp-WebSockets-Native-Push-Notification.png'},
    { name: 'Project name', type: 'events', src: '/assets/img/events/APIWorld.jpg'},
    { name: 'Project name', type: 'events', src: '/assets/img/events/BostonHacks.jpg'},
    { name: 'Project name', type: 'events', src: '/assets/img/events/HackRPI.jpg'},
    { name: 'Project name', type: 'events', src: '/assets/img/events/Rutgers-Hackthon.jpg'}
  ]

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() { }

  ngAfterViewInit(){
    this.isotope = new Isotope(document.querySelector('.gallery'), {
      itemSelector: '.gallery-item',
      filter: '.all'
    });       
  }

  public openItemDialog(item:any){   
    let dialogRef = this.dialog.open(ItemDialogComponent, {
        data: item,
        panelClass: 'item-dialog'
    });
    dialogRef.afterClosed().subscribe(item => {
      if(item){
         this.router.navigate(['/home']); 
      }
    });
  }

  public ngDoCheck(){
    var last = document.getElementsByClassName('last');
    if(last.length > 0){
      this.isotope.arrange({ filter: '.'+this.filter });
    }
  }

}