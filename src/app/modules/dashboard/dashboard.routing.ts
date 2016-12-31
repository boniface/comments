/**
 * Created by hashcode on 2016/12/25.
 */
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {RouteGuardService} from "../../services/guards/route-guard.service";

export const DashboardRouter = RouterModule.forChild([
  {path: '', component: DashboardComponent,canActivate: [RouteGuardService]}
]);
