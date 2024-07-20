import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// creating router 
// const router = createBrowserRouter([
//   {
//     path: '/',  //slash is top level element
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },{
//         path:"about",
//         element: <About/>
//       },{
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//another way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routes />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
        {/* <Route  path='insideabout' element/> we can do nesting inside route also */}
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader ={githubInfoLoader}
      path='/github' 
      element={<Github />}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* it will take props, it will not work until it take props  */}
    {/* passing router  */}
    <RouterProvider router={router} />  {/*router provider is like a wrapper, in which we wraapped everything in it  */}
  </React.StrictMode> 
)
