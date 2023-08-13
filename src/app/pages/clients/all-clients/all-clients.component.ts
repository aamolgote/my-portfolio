import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'src/app/theme/components/swiper/swiper.module';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss']
})
export class AllClientsComponent implements OnInit {
  public config: SwiperConfigInterface = { };
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public clients = [
    'assets/img/clients/icreditworks.jpg',
    'assets/img/clients/morganstanley.jpg',
    'assets/img/clients/microsoft.jpg',
    'assets/img/clients/ap.png',
    'assets/img/clients/boa.jpg',  
    'assets/img/clients/lexisnexis.png',
    'assets/img/clients/punjabgov.png',
    'assets/img/clients/BestBuyCanada.webp',
    'assets/img/clients/washingtonmutual.webp',
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 29,         
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: true,    
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide",
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        },
        960: {
          slidesPerView: 5
        },
        1280: {
          slidesPerView: 6
        }
      }
    }
  
  }

}
