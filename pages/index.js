import Head from 'next/head'
import { getSession } from "next-auth/client";
import Banner from './components/Home/Banner'
import Bottom from './components/Home/Bottom'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>AirFeed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Bottom />
        </main>
        <Footer/> 
        {/* <Courses/> */}

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
