import {Action} from "@ngrx/store";
import {AuthModel} from "../models/login.model";
import * as loginActions from "../actions/login.action";
/**
 * Created by hashcode on 2016/12/26.
 */


export function LoginReducer(state:AuthModel = new AuthModel(), action: Action) {

  switch(action.type) {

    case loginActions.ActionTypes.login:
      return Object.assign(new AuthModel(), state, {authorized: action.payload});

    default:
      return state;
  }
}
