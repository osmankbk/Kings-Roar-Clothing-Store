import { useState } from "react";

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

  console.log(formValues);

  return (
    <div>
      <h1>User Sign UP</h1>

      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required name="displayName" value={displayName} onChange={onChangeFormValue}/>

        <label>Email</label>
        <input type="email" required name="email" value={email} onChange={onChangeFormValue}/>

        <label>Password</label>
        <input type="password" required name="password" value={password} onChange={onChangeFormValue}/>

        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} onChange={onChangeFormValue}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;