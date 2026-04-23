import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BackgroundEffect from './components/BackgroundEffect';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AdminPage from './Pages/Admin';

// This component provides the standard layout for most of your application
const MainLayout = () => (
  <div className="relative min-h-screen w-full overflow-x-hidden">
    <BackgroundEffect />
    <Header />
    <Sidebar />
    <main className="relative ml-64 mt-16 p-8 z-10">
      {/* The Outlet component renders the active child route */}
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <Routes>
      {/* All routes inside here will share the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* The index route is the default child route for the parent path */}
        <Route index element={<Home />} />
        {/* You can add more routes that use the MainLayout here */}
        {/* e.g., <Route path="profile" element={<ProfilePage />} /> */}
      </Route>

      {/* This route is separate and does not use the MainLayout */}
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
}
