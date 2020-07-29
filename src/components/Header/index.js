import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../Button';

function Header() {
  return (
    <Container>
      <nav className="Menu">
        <Link to="/">
          <img src={Logo} alt="gigantedev logo" className="Logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Video
        </Button>
      </nav>
    </Container>
  );
}

export default Header;