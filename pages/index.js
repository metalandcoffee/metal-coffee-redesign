import Head from "next/head"
import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import RecentPosts from "./components/RecentPosts"

  export default function Home() {
    return (
      <>
        <Head>
          <title>metalandcoffee.com</title>
          <meta name="description" content="Description for metalandcoffee.com" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Jumbotron />
        <main className="container">
          <section>
            <RecentPosts />
          </section>
        </main>
      </>
    );
  }
