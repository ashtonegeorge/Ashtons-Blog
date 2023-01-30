import Head from 'next/head';
import { Navbar, Landing } from '../components';

export default function Home() {
  return (
    <>

      <div>

        <Landing />

        <Navbar />

      </div>

    </>
  )
}