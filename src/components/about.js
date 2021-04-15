import React from 'react'
import Navbar from './navbar'
import ChrisImage from '../images/chris-image.svg'
import TitleHeader from './title-header'

export default function About(){

  return (
    <div className="background absolute inset-0 z-0">
      <img src={ChrisImage} alt="Chris Image"></img>
      <TitleHeader />
    </div>
    
  )

}
