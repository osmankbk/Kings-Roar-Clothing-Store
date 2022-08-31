import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopUp } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../form-input/form-input.component"
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer} from "./sign-in.styles";

const signInDefaultValues = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [ loginValues, setLoginValues ] = useState(signInDefaultValues);
  const { email, password } = loginValues;

  const onChangeValues = (event) => {
    const { name, value } = event.target;
    return setLoginValues({ ...loginValues, [name]: value });
  }

  const resetFormValues = (event) => {
    event.preventDefault();
    setLoginValues(signInDefaultValues);
  }

  const googleSignIn = async() => {
    await signInWithGooglePopUp();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormValues(event);
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password For Email');
          break;
        case 'auth/user-not-found':
          alert('User With This Email Does Not Exist!');
          break;
        default:
          console.log(error);
      }
    }
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput 
          label="Email"
          type="email"
          required
          name="email"
          value={ email }
          onChange={ onChangeValues } 
        />

        <FormInput 
          label="Password"
          type="password"
          required
          name="password"
          value={ password }
          onChange={ onChangeValues }
        />
        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.base} >Sign In</Button>
          <Button type='submit' buttonType={BUTTON_TYPES_CLASSES.google} onClick={ googleSignIn }>Google sign in</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;