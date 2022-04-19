import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Switch, Redirect } from "react-router-dom";


const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />


      {/* <Home />
      <Service/>
      <About />
      <Contact />
      <Navbar />
      <Footer /> */}
    </>
  );
};

// import logo from './logo.svg';
// import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
// import './App.css';

// const App = () => {

//     const { t } = useTranslation();
  
//     function handleClick(lang) {
//       i18next.changeLanguage(lang)
//     }
  
//     return (
//       <>
//       <div className="App">
//           <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
//             <button onClick={()=>handleClick('en')} >
//               English
//             </button>
//             <button onClick={()=>handleClick('ko')} >
//               Hindi
//             </button>
//             <button onClick={()=>handleClick('chi')} >
//               Chinese
//            </button>
//           </nav>
//           <header className="App-header">
//             {/* <img src={logo} className="App-logo" alt="logo" /> */}
//             <p>
//               {/* <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>  */}
//             </p>
//           </header>
//       </div>
    
    
    
//     </>
//   );
// };

export default App;
