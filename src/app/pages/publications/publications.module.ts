import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PublicationsComponent } from './publications.component';

export const routes: Routes = [
  { path: '', component: PublicationsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    PublicationsComponent
  ]
})
export class PublicationsModule { }
