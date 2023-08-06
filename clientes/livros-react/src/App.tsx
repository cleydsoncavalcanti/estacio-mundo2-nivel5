import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "./App.css"; // Import your custom CSS file here

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/livros" className="navbar-brand">
            Catálogo de Livros
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/livro/1" className="nav-link">
                  Novo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/livros" element={<LivroLista />} />
        <Route path="/livro/:id" element={<LivroDados />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
