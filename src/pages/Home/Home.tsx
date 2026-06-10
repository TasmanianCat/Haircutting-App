import Header from '@/components/layout/Header/Header';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Services from '@/components/sections/Services/Services';
import Gallery from '@/components/sections/Gallery/Gallery';
import Contacts from '@/components/sections/Contacts/Contacts';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contacts />
        {/* Other sections will go here */}
      </main>
    </>
  );
};

export default Home;
