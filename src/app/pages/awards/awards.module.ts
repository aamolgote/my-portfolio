import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AwardsComponent } from './awards.component';

export const routes: Routes = [
  { path: '', component: AwardsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    AwardsComponent
  ]
})
export class AwardsModule { }
