import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroVideo from '../pages/cadastro/Video';
import CadastroCategoria from '../pages/cadastro/Category';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route  component={Page404} />
    </Switch>
  );
}

export default Routes;