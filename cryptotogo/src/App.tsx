import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MainNavBar from './components/navigation/MainNavBar';
import routes from './routeConfig';

export default function App() {
  return (
    <BrowserRouter>
    <MainNavBar />
      <Container fluid>
        <Routes>
          {routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.component}>
            </Route>)}
        </Routes>
      </Container>
    </BrowserRouter>
  )
};
