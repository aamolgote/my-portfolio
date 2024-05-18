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
      topics: 'Microservices, Spring, Cloud',
      platformUrl: 'https://www.dzone.com',
      articles: [
        {
          title: 'Ensuring Reliable Microservice Deployment With Spring Boot Build Info Maven Plugin',
          link: 'https://dzone.com/articles/microservice-version-verification-with-spring-boot'
        },
        {
          title: 'A Guide to Enhanced Debugging and Record-Keeping',
          link: 'https://dzone.com/articles/logging-and-storing-third-party-api-interactions-using-interceptor'
        },
        {
          title: 'Using Spring To Download a Zip File, Extract It, and Upload It to Cloud Storage Without Storing Files Locally in the Container',
          link: 'https://dzone.com/articles/spring-download-zip-file-extract-and-save-to-cloud-storage'
        },
        {
          title: 'Ensuring API Resilience in Spring Microservices Using Retry and Fallback Mechanisms',
          link: 'https://dzone.com/articles/api-resilience-with-retry-fallback-in-spring'
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/baeldung.png',
      platformDescription: 'Baeldung is a trusted resource in the Java ecosystem, specializing in in-depth tutorials and articles on Java, Spring technologies, and microservices, serving as a go-to guide for software developers.',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: 'https://www.baeldung.com/about',
      articles: [
        {
          title: 'Dynamically Managing Kafka Listeners in Spring Boot',
          link: 'https://www.baeldung.com/kafka-spring-boot-dynamically-manage-listeners'
        },
        {
          title: 'Ensuring Message Ordering in Kafka: Strategies and Configurations',
          link: 'https://www.baeldung.com/kafka-message-ordering'
        },
        {
          title: 'Difference Between Hashtable and ConcurrentHashMap in Java',
          link: 'https://www.baeldung.com/java-hashtable-vs-concurrenthashmap'
        },
        {
          title: 'Update an Existing Amazon S3 Object using Java',
          link: 'https://www.baeldung.com/java-update-amazon-s3-object'
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/framework.png',
      platformDescription: 'Share experiences gained using innovator and early adopter stage techniques and technologies with the wider industry.',
      topics: 'Microservices and Fintech',
      platformUrl: '',
      articles: [
        {
          title: 'From Dependency to Autonomy: Building an In-House E-signing Service',
          link: 'https://www.infoq.com/articles/electronic-signing-service-cloud/'
        },
        {
          title: 'E-Delivery Microservices Based Multi-Channel Communications Delivery Framework',
          link: 'https://ijcttjournal.org/archives/ijctt-v72i5p101'
        },
        {
          title: 'Building a Cash Flow Underwriting System: Insights from Implementation',
          link: 'https://ijcttjournal.org/archives/ijctt-v72i2p113'
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/research-papers.png',
      platformDescription: '',
      topics: 'Research Papers',
      platformUrl: '',
      articles: [
        {
          title: 'Real-time interactivity in hybrid applications with Web sockets.',
          link: 'https://www.doi.org/10.56726/IRJMETS48494'
        },
        {
          title: 'Enhancing Resilience: A Solution Framework for Handling Third-Party Service Disruptions in FinTech Mobile Applications',
          link: 'https://www.ijmra.us/project%20doc/2024/IJME_FEBRUARY2024/IJMIE11Feb24_1568.pdf'
        },
        {
          title: 'Comparative Analysis of Machine Learning Models for Credit Scoring: A Case Study',
          link: 'https://ijarsct.co.in/Paper15452.pdf'
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/ai.png',
      platformDescription: 'How AI can help in building microservices.',
      topics: 'Microservices and AI',
      platformUrl: '',
      articles: [
        {
          title: 'Supercharging Productivity in Microservice Development With AI Tools',
          link: 'https://dzone.com/articles/boost-productivity-microservice-development/'
        },
        {
          title: 'IntelliJ and Java Spring Microservices: Productivity Tips With GitHub Copilot',
          link: 'https://dzone.com/articles/co-pilot-intellij-microservices-productivity-tips'
        },
        {
          title: 'To be added',
          link: ''
        },
        {
          title: 'To be added',
          link: ''
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/dzone.png',
      platformDescription: 'DZone is a widely-recognized platform that connects software developers and IT professionals, serving as a hub for expert insights, tutorials, and industry news.',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: 'https://www.dzone.com',
      articles: [
        {
          title: 'An Approach To Synthetic Transactions With Spring Microservices',
          link: 'https://dzone.com/articles/synthetic-transactions-spring-microservices-validation'
        },
        {
          title: 'Spring Microservice Application Resilience: The Role of @Transactional in Preventing Connection Leaks',
          link: 'https://dzone.com/articles/spring-microservice-role-of-transactional'
        },
        {
          title: 'To be added',
          link: ''
        },
        {
          title: 'To be added',
          link: ''
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/blog.png',
      platformDescription: 'MyTechNetKnowhows (personal technical blog) - Microservices/Cloud/.NET',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: 'https://mytechnetknowhows.wordpress.com/',
      articles: [
        {
          title: 'Developing Scalable and Resilient Applications using the Twelve-Factor App Principles',
          link: 'https://mytechnetknowhows.wordpress.com/2016/05/29/twelve-factor-apps/'
        },
        {
          title: 'Embracing Microservices: Evolution, Advantages, and Implementation Challenges',
          link: 'https://mytechnetknowhows.wordpress.com/2016/06/05/something-microservices/'
        },
        {
          title: 'Building a Video Streaming API with ASP.NET Web API and PushStreamContent',
          link: 'https://mytechnetknowhows.wordpress.com/2017/05/18/asp-net-web-api-and-streaming-video-content/'
        },
        {
          title: 'Implementing Cross-Origin Resource Sharing (CORS) in Web API 2',
          link: 'https://mytechnetknowhows.wordpress.com/2016/06/12/cors-and-web-api-2/'
        },
        {
          title: 'HTTP Methods Demystified: Idempotency, Safety, and Best Practices for RESTful APIs',
          link: 'https://mytechnetknowhows.wordpress.com/2016/05/31/http-methods-put-post-idempotent-safe/'
        }
      ]
    },
    {
      imageUrl: '/assets/img/publications/java-script.png',
      platformDescription: 'MyTechNetKnowhows (personal technical blog) - Microservices/Cloud/.NET',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: 'https://mytechnetknowhows.wordpress.com/',
      articles: [
        {
          title: 'Change detection in Angular',
          link: 'https://mytechnetknowhows.wordpress.com/2017/07/09/change-detection-in-angular-obviously-2-0-greater/'
        },
        {
          title: 'Hierarchical Dependency Injection in Angular',
          link: 'https://mytechnetknowhows.wordpress.com/2017/05/28/hierarchical-dependency-injection-in-angular/'
        },
        {
          title: 'Angular Nested Routing',
          link: 'https://mytechnetknowhows.wordpress.com/2017/03/05/angular-2-nested-routing/'
        },
        {
          title: 'Observable’s in Angular (RxJS)',
          link: 'https://mytechnetknowhows.wordpress.com/2016/10/04/observables-in-angular-2-rxjs/'
        },
        {
          title: 'Angular Applications: Leveraging @Injectable for Scalable Services',
          link: 'https://mytechnetknowhows.wordpress.com/2016/09/13/injectables-angular-2-0/'
        }, 
        {
          title: 'Typeaheads – Avoid Frequent Backend calls with RxJS debounce',
          link: 'https://mytechnetknowhows.wordpress.com/2017/07/02/typeaheads-avoid-frequent-backend-calls-with-rxjs-debounce/'
        }, 
        {
          title: 'Angular - Pipes passing multiple filters to Pipes',
          link: 'https://mytechnetknowhows.wordpress.com/2017/02/18/angular-2-pipes-passing-multiple-filters-to-pipes/'
        }
      ]
    }
  ];

  public bookReviews = [
    {
      imageUrl: '/assets/img/publications/book-reviews/jakarta-app-dev.jpg',
      platformDescription: '',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: '',
      books: [
        {
          title: 'Book Reviewer - Jakarta EE Application Development',
          link: 'https://www.packtpub.com/product/jakarta-ee-application-development-second-edition/9781835085264'
        }
      ]
    }
  ];

  public mediaLinks = [
    {
      imageUrl: '/assets/img/publications/media/media-coverage.jpg',
      platformDescription: '',
      topics: 'Microservices, Spring, Cloud',
      platformUrl: '',
      media: [
        {
          title: 'Tech bullion - Financial Technology News',
          link: 'https://techbullion.com/pioneering-fintech-innovation-and-impact-as-solutions-architect/'
        },
        {
          title: 'The Financial News 247 - Latest Finance News and Updates',
          link: 'https://thefinancialnews247.com/driving-fintech-innovation-as-a-solutions-architect/'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
