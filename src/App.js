import React from 'react'
import Navbar from './Component/Navbar';
import RighSideBar from './Component/RighSideBar';
import LeftSideBar from './Component/LeftSideBar';
import Post from './Component/Post';
const App = () => {
  return (
    <div>
      <Navbar />




      <div className='container'>

        <div className='left_sectoin'>
          <LeftSideBar/>
        </div>

        <div className='post_sectoin'>
        <Post/>
        </div>
        
        <div className='right_sectoin'>
        <RighSideBar/>
        </div>

      </div>






    </div>
  )
}



export default App;
