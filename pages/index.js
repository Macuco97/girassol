import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header.js'
import Nav from '../components/nav.js'
import Content from '../components/content.js'
import About from '../components/about.js'
import { useState } from 'react'

export default function Home() {
  const [navMobileStatus, setNavMobileStatus] = useState(false)
  return (
    <div className = {`bg-amber-50 min-h-screen min-w-screen`}>
      <Header
      navMobileStatus = {navMobileStatus}
      setNavMobileStatus = {data => setNavMobileStatus(data)}      
      />
      <Nav
      navMobileStatus = {navMobileStatus}
      setNavMobileStatus = {data => setNavMobileStatus(data)}
      />
      <Content
      navMobileStatus = {navMobileStatus}
      setNavMobileStatus = {data => setNavMobileStatus(data)}    
      />
      <About
      navMobileStatus = {navMobileStatus}
      setNavMobileStatus = {data => setNavMobileStatus(data)}      
      />
    </div>
  )
}
