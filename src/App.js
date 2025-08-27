import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import AppHeader from './components/header';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppCollection from './components/collection';
import AppNewarrivals from './components/newarrivals';
import Appfooter from './components/footer';
import AppHero from './hero';

import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>

      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <main>
                <AppHero />
                <AppCollection />
                <AppNewarrivals />
                <AppServices />
                <AppAbout />
              </main>
              <footer id="footer">
                <Appfooter />
              </footer>
            </>
          }
        />

        {/* User dashboard page */}
        <Route path="/user" element={<UserDashboard />} />

        {/* Admin dashboard page */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
