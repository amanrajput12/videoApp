import { useState } from 'react'

import './index.css'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import Store from './utils/Store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincomp from './components/Maincomp'
import Watch from './components/Watch'
import SearchVideoComp from './components/SearchVideoComp'
import Playlist from './components/Playlist'
import ChannelComp from './components/ChannelComp'
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincomp/>
    },
    {
      path:"watch",
      element:<Watch/>
    },
    {
   path:"/results",
  element:<SearchVideoComp/>
    },{
    path:"/playlist",
    element:<Playlist/>
    },
    {
   path:"/channel",
   element:<ChannelComp/>
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
     
     <RouterProvider router={appRouter}/>
    </>
    </Provider>

  )
}

export default App
