import Header from '@/components/layout/Header/Header';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* Other sections will go here */}
      </main>
    </>
  );
};

export default Home;
