import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utilities/firebase/firebase.utilities";
import { createAction } from '../utilities/reducers/reducers.utilis';


export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = ( state, action ) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
     ...state,
     currentUser: payload
    }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

const ContextProvider = ({children}) => {
  const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    return dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user))
  }
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener( (user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export default ContextProvider;