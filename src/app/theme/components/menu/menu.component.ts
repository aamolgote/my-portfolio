import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  public isSmallDevice:boolean = false;
  public menuItems = [
    { title: 'home', routerLink: '/about', icon: 'home' },
    { title: 'experience', routerLink: '/experience', icon: 'touch_app' },
    { title: 'clients', routerLink: '/clients', icon: 'thumbs_up_down' },   
    { title: 'Publications', routerLink: '/services', icon: 'menu_book' },
    { title: 'Speaking', routerLink: '/speaking', icon: 'speaker' },
    { title: 'skills', routerLink: '/skills', icon: 'build' },
    { title: 'Certifications', routerLink: '/certifications', icon: 'badge' },    
    { title: 'awards', routerLink: '/awards', icon: 'emoji_events' },
    { title: 'portfolio', routerLink: '/portfolio', icon: 'work' }
    //{ title: 'team', routerLink: '/team', icon: 'group' },
    // { title: 'contact', routerLink: '/contact', icon: 'mail' }
  ]
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    (window.innerWidth < 960) ? this.isSmallDevice = true : this.isSmallDevice = false;
  }
  
  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.isSmallDevice = true : this.isSmallDevice = false;
  }

}
