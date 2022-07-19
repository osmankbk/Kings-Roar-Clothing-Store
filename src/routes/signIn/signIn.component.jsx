import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';

const SignIn = () => {

  const logInGoogleUser = async() => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
    <h1>Sign In Page</h1>
      <button onClick={ logInGoogleUser }> Sign In With Google Popup</button>
    </div>
  )
}

export default SignIn;