import { Outlet } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { WHATSAPP_NUMBER } from './config/whatsapp';

export default function App() {
  return (
    <AppLayout>
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton phone={WHATSAPP_NUMBER} />
    </AppLayout>
  );
}
