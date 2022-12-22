import React from 'react'
import Prof from '../images/pro.png'
import './profile.css'


const Profile = () => {
  return (
    <div className='prof-div'>
      <div >
        <h2>Hi, I'm <span>Zakariya Buhari</span> a UI/UX Designer</h2>
        <p>I am a passionate UI/UX Designer who likes to solve problems and design solutions which create impart on lives of users. An iterator, design thinker and learner with experience in designing mobile apps and web designs.</p>
      </div>
      <div>
        <img src={Prof} alt="" />
      </div>
    </div>
  )
}

export default Profile