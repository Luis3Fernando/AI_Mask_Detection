import React from 'react'
import Navbar from '../components/Navbar'
import Detection from '../components/Detection'
import ImageList from '../components/ImageList'


function Home() {
  return (
    <>
      <div class='min-h-screen flex flex-row bg-gray-100 p-6'>
        <Navbar></Navbar>
        <Detection></Detection>
        <ImageList></ImageList>
      </div>
    </>
  )
}

export default Home
