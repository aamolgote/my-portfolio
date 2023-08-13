import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  public services = [
    { 
      imageUrl: '/assets/img/publications/dzone.png',
      title: 'Microservices - APIs', 
      articles: [
        {
          title : 'Ensuring Reliable Microservice Deployment With Spring Boot Build Info Maven Plugin',
          link: 'https://dzone.com/articles/microservice-version-verification-with-spring-boot'
        },
        {
          title : 'A Guide to Enhanced Debugging and Record-Keeping',
          link: 'https://dzone.com/articles/logging-and-storing-third-party-api-interactions-using-interceptor'
        },
        {
          title : 'Using Spring To Download a Zip File, Extract It, and Upload It to Cloud Storage Without Storing Files Locally in the Container',
          link: 'https://dzone.com/articles/spring-download-zip-file-extract-and-save-to-cloud-storage'
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/blog.png',
      title: 'Microservices - APIs', 
      articles: [
        {
          title : 'Twelve factor apps',
          link: 'https://mytechnetknowhows.wordpress.com/2016/05/29/twelve-factor-apps/'
        },
        {
          title : 'ASP.NET Web API and Streaming Video Content',
          link: 'https://mytechnetknowhows.wordpress.com/2017/05/18/asp-net-web-api-and-streaming-video-content/'
        },
        {
          title : 'CORS and Web API',
          link: 'https://mytechnetknowhows.wordpress.com/2016/06/12/cors-and-web-api-2/'
        },
        {
          title : 'HTTP Methods PUT, POST, Idempotent, Safe…',
          link: 'https://mytechnetknowhows.wordpress.com/2016/05/31/http-methods-put-post-idempotent-safe/'
        },
        {
          title : '',
          link: ''
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
