import React from 'react'
import  NavbarScrolling  from '../../components/navBar/NavBar';
import LeftSide from '../..//components/leftside/left';
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <NavbarScrolling />
      <LeftSide/>
    </div>
  )
}
