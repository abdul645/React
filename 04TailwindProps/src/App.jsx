import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Abdul Azeem",
    age: 22,
  }

  let newArr = [1,2,3];

  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* <Card username='Abdul Azeem' Myarr = {newArr}  someobj ={myObj} /> */}
      <Card username='Abdul Azeem'  btnText ="Click me"/>
      <Card username="Aman Ali" btnText = "Visit me"/>
  

    {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27011250/pexels-photo-27011250/free-photo-of-a-pine-cone-is-hanging-from-a-pine-tree.jpeg" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

    </>
  )
}

export default App
