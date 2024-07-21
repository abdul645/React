
// This code defines a functional component Login in React that handles a basic login form. 

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

// useState and useContext are hooks from React.
// UserContext is imported from a context file, likely used to manage user information globally.


export default function Login() {

    // username and password are state variables, initialized as empty strings.
    // setUsername and setPassword are functions to update these state variables.
    const [username, setUsername] = useState('');
    const [password, setPasswrord] = useState('');

    //setUser is a function extracted from UserContext using the useContext hook. This function will be used to update the user information globally.
     const {setUser} = useContext(UserContext);


    //  handleSubmit is a function that handles form submission.
    //  e.preventDefault() prevents the default form submission behavior.
    //  setUser({ username, password }) updates the user context with the current values of username and password.
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password})
    }



//     The component returns a JSX structure to render the login form.
//     There are two input fields for username and password, with their values controlled by the state variables.
//     onChange events on the input fields update the respective state variables.
//     A button triggers the handleSubmit function when clicked.
  return (
    <div>
        <h2>Login</h2>

        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />
        {" "}

        <input type="text"
        value={password}
        onChange={(e) => setPasswrord(e.target.value)}
        placeholder='password' />


        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


// Summary:
// This Login component provides a simple login form.
// It manages the username and password inputs using React state.
// Upon form submission, it updates the user context with the entered credentials,
// making them available throughout the application via the UserContext.