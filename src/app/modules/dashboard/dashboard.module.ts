/**
 * Created by hashcode on 2016/12/25.
 */
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

// Routing
import { DashboardRouter } from './dashboard.routing';
import {AlertModule} from "ng2-bootstrap";


@NgModule({
  imports: [
    AlertModule.forRoot(),

    DashboardRouter
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {}
