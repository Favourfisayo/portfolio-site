import Header from './ui/Components/Header';
import Main from './ui/Components/Main';
import About from './ui/Components/About';
import Services from './ui/Components/Services';
import Portfolio from './ui/Components/Portfolio';
import Contact from './ui/Components/Contact';
import Footer from './ui/Components/Footer';


export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-20  ">
    <Header/>
    <Main/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
   </>
  );
}
