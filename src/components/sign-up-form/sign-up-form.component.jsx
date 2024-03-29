import { useState } from "react";
import { createUserDocumentFromAuth, creathAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormValues = {
  displayName: '',
  email: '',
  password: '', 
  confirmPassword: '',
}

const SignUpForm = () => {
  const [ formValues, setFormValues ] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;
  
  const onChangeFormValue = (event) => {
    const { name, value } = event.target;
    return setFormValues({...formValues, [name]: value});
  }

  const resetFormValues = () => {
    setFormValues(defaultFormValues);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    if( password !== confirmPassword ) {
      throw Error('Your passwords needs to match')
    }
    try {
      const { user } = await creathAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormValues();
      
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Account creation denied; Email is already in use');
      }
      console.error(error);
    }

  }

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput 
          label='Display Name' 
          type="text" 
          required 
          name="displayName" 
          value={displayName} 
          onChange={onChangeFormValue}
        />

        <FormInput 
          label='Email' 
          type="email" 
          required 
          name="email" 
          value={email} 
          onChange={onChangeFormValue}
        />

        <FormInput 
          label='Password' 
          type="password" 
          required 
          name="password" 
          value={password} 
          onChange={onChangeFormValue}
        />

        <FormInput 
          label='Confirm Password' 
          type="password" 
          required 
          name="confirmPassword" 
          value={confirmPassword} 
          onChange={onChangeFormValue}
        />
        <Button
        buttonType={BUTTON_TYPES_CLASSES.base}
        type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;