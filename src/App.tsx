import { Outlet } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Header from './components/layout/Header.tsx';
import Footer from './components/layout/Footer.tsx';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { ConsultantProvider } from './config/consultant';

export default function App() {
  return (
    <ConsultantProvider>
      <AppLayout>
        <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

        <Footer />
        <WhatsAppButton />
      </AppLayout>
    </ConsultantProvider>
  );
}
