import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
 
const routes: Routes = [
  { 
      path: '', 
      component: PagesComponent, children: [            
           { path: '', redirectTo: '/about', pathMatch: 'full' },
           { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, 
           { path: 'experience', loadChildren: () => import('./pages/experience/experience.module').then(m => m.ExperienceModule) },
           { path: 'education', loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule) }, 
           { path: 'skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule) }, 
           { path: 'services', loadChildren: () => import('./pages/publications/publications.module').then(m => m.PublicationsModule) }, 
           { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule) }, 
           { path: 'clients', loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule) }, 
           { path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) }, 
           { path: 'team', loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule) }, 
           { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
           { path: 'speaking', loadChildren: () => import('./pages/speaking/speaking.module').then(m => m.SpeakingModule) }, 
           { path: 'certifications', loadChildren: () => import('./pages/certifications/certifications.module').then(m => m.CertificationsModule) },
           { path: 'awards', loadChildren: () => import('./pages/awards/awards.module').then(m => m.AwardsModule) }
      ]
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabledBlocking',
    useHash: true
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
