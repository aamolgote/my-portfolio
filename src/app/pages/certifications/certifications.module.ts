import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CertificationsComponent } from './certifications.component';

export const routes: Routes = [
  { path: '', component: CertificationsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CertificationsComponent
  ]
})
export class CertificationsModule { }
