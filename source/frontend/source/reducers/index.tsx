
import { AnyAction } from 'redux';
import Actions from '../actions';
import { showLogin } from '../actions';
export interface ApplicationState {

}

/**
 * Reducer that takes in previousState, the action and creates the next state in a controller manner.
 * @param previousState State object describing the previous state that we are going to transition from
 * @param action Action that is performed on the previousState to get a new state
 */
export default (state = showLogin(), action: AnyAction): ApplicationState => {
  switch (action.type) {
    case Actions.ATTEMPT_LOGIN:
      console.log(Actions.ATTEMPT_LOGIN);
      return state;

    case Actions.SHOW_LOGIN_WINDOW:
      return state;

    default:
      // Initial application state. We return this if we have nothing better to do.
      return state;
  }
}
