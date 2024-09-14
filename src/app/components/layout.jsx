// ./components/Layout.js
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  // بررسی مسیر فعلی (path) و شرط برای نمایش یا عدم نمایش هدر و فوتر
  const isLoginPage = router.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">

      {!isLoginPage && <Header />}
      <main className="flex-grow">{children}</main>

      {!isLoginPage && <Footer />}
    </div>
  );
}
