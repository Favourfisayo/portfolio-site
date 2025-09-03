import Header from '@/Components/pages/Header';
import Main from '@/Components/pages/Main';
import About from '@/Components/pages/About';
import Services from '@/Components/pages/Services';
import Portfolio from '@/Components/pages/Portfolio';
import Contact from '@/Components/pages/Contact';
import Footer from '@/Components/pages/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    {/* SEO OPTIMIZATIONS */}
    <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Favour Fisayo's portfolio website" />
        <meta name="keywords" content="Next.js, Portfolio, Software Engineer" />
        <meta name="author" content="Favour Fisayo" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="Check out my projects and experience" />
        <meta property="og:type" content="website" />
      </Head>
    <main className="flex flex-col gap-20  ">
    <Header/>
    <Main/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </main>
   </>
  );
}
