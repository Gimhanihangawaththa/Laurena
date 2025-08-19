import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from './components/header';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppCollection from './components/collection';
import AppNewarrivals from './components/newarrivals';
import Appfooter from './components/footer';
import Dashboard from './components/dashboard';
import AppHero from './hero';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>

        <Routes>
          {/* Default route = scrollable sections */}
          <Route
            path="/"
            element={
              <main>
                <AppHero />
                <AppCollection />
                <AppNewarrivals />
                <AppServices />
                <AppAbout />
              </main>
            }
          />

          {/* Profile/Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/Login' element={<Login />} />
          
        </Routes>

        <footer id="footer">
          <Appfooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
