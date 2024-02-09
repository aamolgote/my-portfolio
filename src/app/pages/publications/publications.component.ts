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
      platformDescription: 'DZone is a widely-recognized platform that connects software developers and IT professionals, serving as a hub for expert insights, tutorials, and industry news.', 
      topics : 'Microservices, Spring, Cloud',
      platformUrl : 'https://www.dzone.com',
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
        },
        {
          title : 'Ensuring API Resilience in Spring Microservices Using Retry and Fallback Mechanisms',
          link: 'https://dzone.com/articles/api-resilience-with-retry-fallback-in-spring'
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/baeldung.png',
      platformDescription: 'Baeldung is a trusted resource in the Java ecosystem, specializing in in-depth tutorials and articles on Java, Spring technologies, and microservices, serving as a go-to guide for software developers.',
      topics : 'Microservices, Spring, Cloud', 
      platformUrl : 'https://www.baeldung.com/about',
      articles: [
        {
          title : 'Ensuring Message Ordering in Kafka: Strategies and Configurations',
          link: 'https://www.baeldung.com/kafka-message-ordering'
        },
        {
          title : 'Difference Between Hashtable and ConcurrentHashMap in Java',
          link: 'https://www.baeldung.com/java-hashtable-vs-concurrenthashmap'
        },
        {
          title : 'Update an Existing Amazon S3 Object using Java',
          link: 'https://www.baeldung.com/java-update-amazon-s3-object'
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/infoq.png',
      platformDescription: 'Share experiences gained using innovator and early adopter stage techniques and technologies with the wider industry.', 
      topics : 'Microservices and Fintech',
      platformUrl : 'https://www.infoq.com',
      articles: [
        {
          title : 'From Dependency to Autonomy: Building an In-House E-signing Service',
          link: 'https://www.infoq.com/articles/electronic-signing-service-cloud/'
        },
        {
          title : 'TBD',
          link: ''
        },
        {
          title : 'TBD',
          link: ''
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/research-papers.png',
      platformDescription: '', 
      topics : 'Research Papers',
      platformUrl : '',
      articles: [
        {
          title : 'Real-time interactivity in hybrid applications with Web sockets.',
          link: 'https://www.doi.org/10.56726/IRJMETS48494'
        },
        {
          title : 'Enhancing Resilience: A Solution Framework for Handling Third-Party Service Disruptions in FinTech Mobile Applications',
          link: 'https://www.ijmra.us/project%20doc/2024/IJME_FEBRUARY2024/IJMIE11Feb24_1568.pdf'
        },
        {
          title : 'TBD',
          link: ''
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/ai.png',
      platformDescription: 'How AI can help in building microservices.', 
      topics : 'Microservices and AI',
      platformUrl : '',
      articles: [
        {
          title : 'Supercharging Productivity in Microservice Development With AI Tools',
          link: 'https://dzone.com/articles/boost-productivity-microservice-development/'
        },
        {
          title : 'IntelliJ and Java Spring Microservices: Productivity Tips With GitHub Copilot',
          link: 'https://dzone.com/articles/co-pilot-intellij-microservices-productivity-tips'
        },
        {
          title : 'TBD',
          link: ''
        }
      ]
    },
    { 
      imageUrl: '/assets/img/publications/blog.png',
      platformDescription: 'MyTechNetKnowhows (personal technical blog) - Microservices/Cloud/.NET', 
      topics : 'Microservices, Spring, Cloud',
      platformUrl : 'https://mytechnetknowhows.wordpress.com/',
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
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
