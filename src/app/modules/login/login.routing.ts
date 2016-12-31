/**
 * Created by hashcode on 2016/12/25.
 */
import {RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

export const LoginRouter = RouterModule.forChild([
  {path: 'login', component: LoginComponent}
])
