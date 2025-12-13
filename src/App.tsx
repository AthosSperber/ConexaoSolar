import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Products from './components/Products.tsx';

import Green from './components/Green.tsx';
import Solar from './components/Solar.tsx';
import Placas from './components/Placas.tsx';
import Livre from './components/Livre.tsx';
import Telecom from './components/Telecom.tsx';

import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />

      <Green />
      <Solar />
      <Placas />
      <Livre />
      <Telecom />

      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
