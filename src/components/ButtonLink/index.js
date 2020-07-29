import React from 'react';

import { Button } from './styles';

function ButtonLink(props) {
  return (
    <Button as='a' href={props.href} className={props.className}>
      {props.children}
    </Button>
  );
}

export default ButtonLink;