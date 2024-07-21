import React from "react";
import UserContext from "./UserContext";

// here children is nothing but like a div it pass props to the next step
// UserContextProvider is a functional component.
// It accepts children as a prop, which represents any nested components wrapped by this provider.
const UserContextProvider = ({ children }) => {

    //creating State
    // user is a state variable initialized to null.
    // setUser is a function to update the user state.
    // React.useState(null) creates a state with an initial value of null.
    const [user, setUser] = React.useState(null)
    return (
        //      UserContext.Provider is a component provided by the UserContext created earlier.
        //      The value prop of the Provider is an object containing the user state and the setUser function.
        //      {children} is used to render any child components that are nested within UserContextProvider.
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </ UserContext.Provider>
    )
}

export default UserContextProvider

// Summary:
// Purpose: UserContextProvider wraps around other components to provide them access to the user state and the setUser function.
// Usage:
// By wrapping parts of the application with UserContextProvider, any component within that tree can access and update the user information through the context.
// This pattern is useful for managing global state, such as user authentication status, across an application.