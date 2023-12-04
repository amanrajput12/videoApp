import { useState } from 'react'

import './index.css'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import Store from './utils/Store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincomp from './components/Maincomp'
import Watch from './components/Watch'
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincomp/>
    },
    {
      path:"/watch",
      element:<Watch/>
    }
]
}])
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
    <>
     {
      /*
      Head
      Body 
      sidebar
        MenuItem
      Manincontainer
        ButtonList
        Videcontainer
      */
     }
     <Head/>
     <RouterProvider router={appRouter}/>
    </>
    </Provider>

  )
}

export default App
