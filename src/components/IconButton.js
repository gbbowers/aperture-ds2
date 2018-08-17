import React from 'react';
import styled from 'styled-components';

// TODO: figure out what's missing for passing the background color prop in.
// See https://www.styled-components.com/docs/basics#attaching-additional-props

const ButtonContainer = styled.button`
    display: inline-block;
    padding: .75rem;
    border: 0;
    border-radius: .25rem;
    background-color: ${props => props.color || 'transparent'};
    cursor: pointer;

    &:hover {
        background-color: #EBFBFF;
        & svg {
            fill: #0C7994;
        }
    }
`
const IconContainer = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    
`


const IconButton = props => (
    <ButtonContainer color={props.color}>
        <IconContainer>{props.children}</IconContainer>
    </ButtonContainer>    
)

export default IconButton