import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PricingComponent } from './pricing.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { YearlyComponent } from './yearly/yearly.component';

export const routes: Routes = [
  { path: '', component: PricingComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    PricingComponent,
    MonthlyComponent,
    YearlyComponent
  ]
})
export class PricingModule { }
