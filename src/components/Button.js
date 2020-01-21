import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? 'red' : 'transparent')};
  border: 1px solid #6200ee;
  border-radius: 4px;
  color: #6200ee;
  text-transform: uppercase;
  letter-spacing: 0.089rem;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 1rem;
  transition: all 300ms ease-out;

  &:hover {
    color: crimson;
    transition: all 300ms ease-out;
  }
`;

export const Button = props => {
  console.log('Primary prop', props.primary);
  console.log('Secondary prop', props.secondary);
  return <StyledButton>{props.children}</StyledButton>;
};
