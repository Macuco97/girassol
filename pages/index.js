import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header.js'

export default function Home() {
  return (
    <div className = {`bg-amber-50 min-h-screen min-w-screen`}>
      <Header/>
    </div>
  )
}
