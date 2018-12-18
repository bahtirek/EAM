
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerComponent } from './employer.component';
import { EmployerRoutingModule } from './employer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule,
    
  ],
    declarations: [EmployerComponent,
]
})
export class EmployerModule { }

