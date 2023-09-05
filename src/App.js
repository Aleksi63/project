import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routesMap } from './services';
import { Footer, Header } from './pages';
import { LanguageContextProvider } from './services'; 

function App() {
  return (
    <div className="App">
     <Router>
        <LanguageContextProvider>
          <Header />
            <Routes>
              {routesMap.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
              ))}
            </Routes>
          <Footer />
        </LanguageContextProvider>
     </Router>
    </div>
  );
}

export default App;
