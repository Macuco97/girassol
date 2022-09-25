import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header.js'
import Nav from '../components/nav.js'
import Content from '../components/content.js'
import { useState } from 'react'

export default function Home() {
  const [navContent, setNavContent] = useState(0)

  return (
    <div className = {`bg-amber-100 min-h-screen min-w-screen`}>
      <Nav
      navContent = {navContent}
      setNavContent = {data => setNavContent(data)}
      />
      <Content
      navContent = {navContent}
      setNavContent = {data => setNavContent(data)}    
      />
    </div>
  )
}
