import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routesMap } from './services';
import { Header } from './pages';
import { LanguageContextProvider } from './services'; 
import { FavoritesContextProvider } from './services';
function App() {
  return (
    <div className="App">
      <Router>
        <LanguageContextProvider>
          <FavoritesContextProvider>
            <Header />
              <Routes>
                {routesMap.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element}/>
                ))}
              </Routes>
          </FavoritesContextProvider>
        </LanguageContextProvider>
      </Router>
    </div>
  );
}

export default App;
