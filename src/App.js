import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppCollection from './components/collection';
import AppNewarrivals from './components/newarrivals';



function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader/>
      </header>
  <main>
    <AppHero/>
    <AppCollection/>
    <AppNewarrivals/>
    <AppServices/>
    <AppAbout/>
    
  </main>
    </div>
  )
}

export default App;
