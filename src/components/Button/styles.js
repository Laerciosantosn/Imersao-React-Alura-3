import styled from 'styled-components';

export const ButtonLink = styled.button`
  color: var(--blackPurple);
  /* border: 1px solid var(--whitePurple); */
  background: var(--whitePurple);
  box-sizing: border-box;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
  & {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--whitePurple);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
}
`;
