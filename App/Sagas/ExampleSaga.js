import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { userService } from 'App/Services/UserService'
import NavigationService from 'App/Services/NavigationService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser(action) {
  //console.log(action);
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser, action)
  if (user) {
    yield put(ExampleActions.fetchUserSuccess(user))
  } else {
    NavigationService.navigateAndReset('LoginScreen')
    // yield put(
    //   ExampleActions.fetchUserFailure('There was an error while fetching user informations.')
    // )
  }
}
