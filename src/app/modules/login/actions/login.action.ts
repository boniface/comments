import {Action} from "@ngrx/store";
/**
 * Created by hashcode on 2016/12/26.
 */

export const ActionTypes = {
  login: 'login'
};

export class LoginAction implements Action {
  type = ActionTypes.login;

  constructor(public payload: boolean) { }
}
