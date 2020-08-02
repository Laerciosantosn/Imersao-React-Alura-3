import React from 'react';

import { ButtonLink } from './styles';

function Button(props) {
  return (
    <ButtonLink {...props}>
      {props.children}
    </ButtonLink>
  );
}

export default Button;
