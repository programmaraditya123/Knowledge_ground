import React from 'react'

const Homepage = () => {
  return (
    <div className='Homebody'>
      <h1>Welcome To Knowledge Ground</h1>
     <div className='twooptions'>
      <div className='firstfield'>
        <p>What You Want To Learn ?</p>
        <input type='text' placeholder='Enter what you want to learn today'/>
      </div>
      <div className='firstfield'>
        <p>What You Are Preparing For ?</p>
        <input type='text' placeholder='Enter what you are preparing now'/>
      </div>
     </div>
     <h2>Start Learning</h2>
     <div className='cards'>
      <div className='card1'>
        <img src='' alt='courseimg'/>
        <p className='p1'>This Is The DSA Course Made For You To learn Data Structure And Algorithms</p>
        <p className='p2'>Beginner to Advance</p>
        <div className='carddown'>
          <p className='p3'>Free Course</p>
           <p className='p4'>Explore</p>
        </div>
      </div>
      <div className='card1'>
        <img src='' alt='courseimg'/>
        <p className='p1'>This Is The DSA Course Made For You To learn Data Structure And Algorithms</p>
        <p className='p2'>Beginner to Advance</p>
        <div className='carddown'>
          <p className='p3'>Free Course</p>
           <p className='p4'>Explore</p>
        </div>
      </div>
      <div className='card1'>
        <img src='' alt='courseimg'/>
        <p className='p1'>This Is The DSA Course Made For You To learn Data Structure And Algorithms</p>
        <p className='p2'>Beginner to Advance</p>
        <div className='carddown'>
          <p className='p3'>Free Course</p>
           <p className='p4'>Explore</p>
        </div>
      </div>
     </div>
    <hr/>
      
    </div>
  )
}

export default Homepage;
