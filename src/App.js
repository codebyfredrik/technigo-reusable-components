import React from 'react';
import styled from 'styled-components';
// import { Button } from './components/Button';
import './index.css';

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? 'rgba(98,0,238, 1)' : 'transparent')};
  border: ${props => (props.outlined ? '1px solid rgba(98,0,238, 1)' : 'none')};
  border-radius: 4px;
  color: ${props => (props.primary ? '#fff' : 'rgba(98,0,238, 1)')};
  box-shadow: ${props =>
    props.elevated
      ? '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
      : ''};
  transition: all 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  text-transform: uppercase;
  letter-spacing: 1.25px;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 1rem;
  outline: none;

  &:hover {
    background: ${props =>
      props.primary ? 'rgba(98,0,238, 0.8)' : 'rgba(98,0,238, 0.1)'};
    box-shadow: ${props =>
      props.elevated
        ? '0 5px 12px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22)'
        : ''};
    transition: all 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const App = () => {
  return (
    <div>
      <Button primary elevated>
        Button 1
      </Button>
      <Button primary>Button 2</Button>
      <Button outlined>Button 3</Button>
      <Button text>Button 4</Button>
    </div>
  );
};
