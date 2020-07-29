import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { Container, Main } from './styles';

function PageDefault({ children }) {
  return (
    <Container>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </Container>
  );
}

export default PageDefault;