// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// import { Routes, Route } from 'react-router-dom';
// import AppHeader from './components/header';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppCollection from './components/collection';
// import AppNewarrivals from './components/newarrivals';
// import Appfooter from './components/footer';
// import AppHero from './hero';
// import SingleProduct from './components/SingleProduct';
// import AddProduct from './components/AddProduct';
// import AdminDashboard from './components/AdminDashboard';
// import HomeImageHandling from './components/HomeImages';
// import { useNavigate } from "react-router-dom";

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//     const [showSignup, setShowSignup] = useState(false);
  
//     const navigate = useNavigate();
  
//     const handleShowSignup = () => {
//       setShowLogin(false);
//       setShowSignup(true);
//     };
  
//     const handleShowLogin = () => {
//       setShowSignup(false);
//       setShowLogin(true);
//     };
//   return (
//     <div className="App">
//       <header id="header">
//         <AppHeader />
//       </header>

//       <Routes>
//         {/* Landing page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <main>
//                 <AppHero />
//                 <AppCollection />
//                 <AppNewarrivals />
//                 <AppServices />
//                 <AppAbout />
//               </main>
//               <footer id="footer">
//                 <Appfooter />
//               </footer>
//             </>
//           }
//         />

//         {/* User dashboard page */}
       
//         <Route path="/addproduct" element={<AddProduct />} />
//         <Route path="/homeimages" element={<HomeImageHandling />} /> {/* Placeholder for HomeImages component */}

//           <Route path="/singleview/:id" element={<SingleProduct />} /> 
//         {/* Admin dashboard page */}
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//        <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
//               <Modal.Header closeButton>
//                 <Modal.Title>Loginttt</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <Login onSignupClick={handleShowSignup} />
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShowLogin(false)}>
//                   Close
//                 </Button>
//               </Modal.Footer>
//             </Modal>

//             <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
//                     <Modal.Header closeButton>
//                       <Modal.Title>Sign Up</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                       <Signup onLoginClick={handleShowLogin} />
//                     </Modal.Body>
//                     <Modal.Footer>
//                       <Button variant="secondary" onClick={() => setShowSignup(false)}>
//                         Close
//                       </Button>
//                     </Modal.Footer>
//                   </Modal>
      
//     </div>
//   );
// }

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import AppHeader from './components/header';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppCollection from './components/collection';
// import AppNewarrivals from './components/newarrivals';
// import Appfooter from './components/footer';
// import AppHero from './hero';
// import SingleProduct from './components/SingleProduct';
// import AddProduct from './components/AddProduct';
// import AdminDashboard from './components/AdminDashboard';
// import HomeImageHandling from './components/HomeImages';

// function App() {
//   return (
//     <div className="App">
//       <header id="header">
//         <AppHeader />
//       </header>

//       <Routes>
//         {/* Landing page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <main>
//                 <AppHero />
//                 <AppCollection />
//                 <AppNewarrivals />
//                 <AppServices />
//                 <AppAbout />
//               </main>
//               <footer id="footer">
//                 <Appfooter />
//               </footer>
//             </>
//           }
//         />

//         {/* User dashboard page */}
       
//         <Route path="/addproduct" element={<AddProduct />} />
//         <Route path="/homeimages" element={<HomeImageHandling />} /> {/* Placeholder for HomeImages component */}

//           <Route path="/singleview/:id" element={<SingleProduct />} /> 
//         {/* Admin dashboard page */}
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { useState } from 'react';

// import { Routes, Route } from 'react-router-dom';
// import AppHeader from './components/header';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppCollection from './components/collection';
// import AppNewarrivals from './components/newarrivals';
// import Appfooter from './components/footer';
// import AppHero from './hero';
// import SingleProduct from './components/SingleProduct';
// import AddProduct from './components/AddProduct';
// import AdminDashboard from './components/AdminDashboard';
// import HomeImageHandling from './components/HomeImages';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Login from './components/login';
// import Signup from './components/signup';

// function App() {

//   const [showLogin, setShowLogin] = useState(true); // show login first
//   const [showSignup, setShowSignup] = useState(false);

//   const handleLoginSuccess = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//   };

//   return (
//     <div className="App">
//       <header id="header">
//         <AppHeader />
//       </header>

//       <Routes>
//         {/* Landing page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <main>
//                 <AppHero />
//                 <AppCollection />
//                 <AppNewarrivals />
//                 <AppServices />
//                 <AppAbout />
//               </main>
//               <footer id="footer">
//                 <Appfooter />
//               </footer>
//             </>
//           }
//         />

//         {/* User dashboard page */}
       
//         <Route path="/addproduct" element={<AddProduct />} />
//         <Route path="/homeimages" element={<HomeImageHandling />} /> {/* Placeholder for HomeImages component */}

//           <Route path="/singleview/:id" element={<SingleProduct />} /> 
//         {/* Admin dashboard page */}
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>

//        <Modal show={showLogin} onHide={() => setShowLogin(false)} backdrop="static" keyboard={false}>
//         <Modal.Header>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Login onSuccess={handleLoginSuccess} />
//           <p className="mt-3">
//             Don’t have an account?{" "}
//             <Button variant="link" onClick={() => { setShowLogin(false); setShowSignup(true); }}>
//               Sign up here
//             </Button>
//           </p>
//         </Modal.Body>
//       </Modal>

//           <Modal show={showSignup} onHide={() => setShowSignup(false)} backdrop="static" keyboard={false}>
//         <Modal.Header>
//           <Modal.Title>Signup</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Signup onSuccess={handleLoginSuccess} />
//           <p className="mt-3">
//             Already have an account?{" "}
//             <Button variant="link" onClick={() => { setShowSignup(false); setShowLogin(true); }}>
//               Login here
//             </Button>
//           </p>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import AppHeader from './components/header';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppCollection from './components/collection';
import AppNewarrivals from './components/newarrivals';
import Appfooter from './components/footer';
import AppHero from './hero';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import AdminDashboard from './components/AdminDashboard';
import HomeImageHandling from './components/HomeImages';

import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // ✅ check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setShowLogin(true);
    }
  }, []);

  const handleLoginSuccess = (loggedUser) => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
    setShowLogin(false);
    setShowSignup(false);
    navigate("/"); // go home after login
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogin(true); // show login again after logout
    navigate("/");
  };

  return (
    <div className="App">
      <header id="header">
        <AppHeader user={user} onLogout={handleLogout} />
      </header>

      <Routes>
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
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/homeimages" element={<HomeImageHandling />} />
        <Route path="/singleview/:id" element={<SingleProduct />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>

      {/* Login Modal */}
      <Modal show={showLogin} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login
            onSuccess={handleLoginSuccess}
            onSignupClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} backdrop="static" keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup
            onLoginClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
