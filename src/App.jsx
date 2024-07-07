import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Home = lazy(() => import('./pages/Home'));
const Sliders = lazy(() => import('./pages/Sliders'));
const Favorites = lazy(() => import('./pages/Favorites'));

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '' }}> 
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Mi Aplicación</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/sliders">Sliders</Nav.Link>
                <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="mt-4">
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sliders" element={<Sliders />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
