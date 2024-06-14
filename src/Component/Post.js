import React from 'react'
import './Post.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
function Post() {
  return (
    <div>


      <div className='post_container'>

        <div className='person'>

          <div className='persone-title'>

            <div>
              <img src="https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_640.jpg" alt="" />
            </div>
            <div className='title'>
              <h3>Nature Beauty</h3>
              <p>Nature is awesome</p>
            </div>

          </div>
          <div className=''><BsThreeDotsVertical /></div>

        </div>

        <div className='post'>

          <div className='post-title'><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p> </div>
          <div className='post-image'>

            <img src="https://cdn.pixabay.com/photo/2020/05/07/14/57/buildings-5141841_1280.jpg" alt="" />

            <div className='comment-sectoin'>
            <div className=''> <FcLike  className='item' />7.3k </div>
            <div className=''><FaRegComment  className='item' />10k </div>
            <div className=''> <FaShare  className='item' /> 7.3k</div>
  
          </div>
          </div>

          

        </div>


      </div>

    </div>
  )
}

export default Post