import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utilities";
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

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
    const { user } = await signInWithGooglePopUp();
    return await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
        console.log(response);
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
    <div className="sign-up-container">
      <h1>I already have an account</h1>
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
        <div className="buttons-container">
          <Button buttonType="default" type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={ googleSignIn }>Googel sign in</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;