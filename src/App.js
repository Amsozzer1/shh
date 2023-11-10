import './App.css';
import StandardImageList from './Gallery';
import playlist from './ytPlayList.js';
import Poem from './Poem.js';
import LoveLetter  from './Letter.js';
import Helmet from 'react-helmet';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "root",
    
    path: "/Shhh",
    Component: StandardImageList,
  },
  {
    
    path: "/images",
    Component: StandardImageList,
  },
  {
    
    path: "/playlist",
    Component: playlist,
  },
  {
      
      path: "/poems",
      Component: Poem,
    },
    {
      path: "/letter",
      Component: LoveLetter,
    }
  
  
]);
function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-color : #FFF9C4'}}/>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </div>
  );
}

export default App;
