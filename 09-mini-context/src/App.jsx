// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// This code defines the main App component for a React application and uses the Context API to
// manage user state. Here’s a detailed explanation:
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Context API</h1>
    <Login />
    <Profile />
    </ UserContextProvider>
  )
}

export default App

// The App function defines the main component of the application.
// UserContextProvider wraps the entire JSX returned by the App component. This makes the user context available to all components nested within UserContextProvider.
// A heading <h1>Context API</h1> is displayed at the top.
// The Login component is included to handle user login functionality.
// The Profile component is included to display user profile information.
// Usage of UserContextProvider:
// UserContextProvider wraps around the Login and Profile components. This setup ensures that both components can access and modify the user context.



// Summary:
// Purpose: The App component serves as the main entry point of the application, integrating user context management with the UserContextProvider and displaying the Login and Profile components.
// Context API: By wrapping the Login and Profile components in UserContextProvider, both components can easily share and manage the user state without passing props down through multiple levels.
// Components:
// Login: Handles user login and updates the user context.
// Profile: Displays the logged-in user’s information, which it retrieves from the user context.