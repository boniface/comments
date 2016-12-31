/**
 * Created by hashcode on 2016/12/25.
 */

import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'login', redirectTo: 'login'},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
