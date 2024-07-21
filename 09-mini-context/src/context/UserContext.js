import React from 'react'

// creating context (it is like a global variable)
const UserContext = React.createContext();

export default UserContext; // throwing output

// context will give a provider 





// // wrapping these component in UserContext
// // After wrapping these component it become provider.
// // provider means, every component inside userContext will have the accces of the
// // the global UserContext, which is(const UserContext = React.createContext();)
// // every components inside the userContext , can take the acccess of every state through the USerContext Provider
// <UserContext>   {/* provider */}
// <Login/>   {/* login components */}
// <Card>       {/* card components */}
//     <Data />
// </Card>
// </UserContext>