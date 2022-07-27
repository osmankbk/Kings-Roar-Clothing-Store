import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logInGoogleUser = async() => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  }
  return (
    <div>
    <h1>Sign In Page</h1>
      <button onClick={ logInGoogleUser }> Sign In With Google Popup</button>

      <h1>Sign Up Form</h1>
      <SignUpForm />
    </div>
  )
}

export default SignIn;