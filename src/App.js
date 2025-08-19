import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AppHeader from './components/header';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppCollection from './components/collection';
import AppNewarrivals from './components/newarrivals';
import Appfooter from './components/footer';
import AppHero from './hero';


function App() {
  return (
  
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>

       
          
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
      </div>
    
  );
}

export default App;
