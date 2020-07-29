import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';
import ButtonLink from '../ButtonLink';

function Header() {
  return (
    <Container>
      <nav className="Menu">
        <a href="/">
          <img src={Logo} alt="gitantedev logo" className="Logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
          Novo Video
        </ButtonLink>
      </nav>
    </Container>
  );
}

export default Header;