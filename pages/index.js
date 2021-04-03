import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Selamlar" />
        <p className="description">
          buraları hiç bilmiyorum ben ama 1-2 haftaya bişeyler çıkmaya başlar :*
        </p>
      </main>

      <Footer />
    </div>
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="2" />
        <p className="description">
          2
        </p>
      </main>

      <Footer />
    </div>
  )
}
