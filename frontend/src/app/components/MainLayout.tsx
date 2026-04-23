import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import BackgroundEffect from './BackgroundEffect';
import Footer from './Footer';

const MainLayout = () => (
  <div className="relative min-h-screen w-full overflow-x-hidden">
    <BackgroundEffect />
    <Header />
    <Sidebar />
    <main className="relative ml-64 mt-16 p-8 z-10">
      <Outlet /> {/* This will render the matched child route's component */}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
