import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'src/app/theme/components/swiper/swiper.module';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public config: SwiperConfigInterface = { };
  public testimonials = [
    { 
      text: '', 
      author: '', 
      company: '', 
      image: '' 
    },
    { 
      text: '', 
      author: '', 
      company: '', 
      image: '' 
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 49,         
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false
      },
      breakpoints: {
        960: {
          slidesPerView: 2
        }
      }
    }
  }

}
