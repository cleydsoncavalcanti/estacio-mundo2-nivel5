// Menu.tsx

import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link">
                Lista de Livros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link">
                Dados do Livro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
