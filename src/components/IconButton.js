import React from 'react';
import styled from 'styled-components';

// TODO: figure out what's missing for passing the background color prop in.
// See https://www.styled-components.com/docs/basics#attaching-additional-props

const ButtonContainer = styled.button.attrs({
    bgcolor: props => props.color || 'transparent',
})`
    display: inline-block;
    padding: .75rem;
    border: 0;
    border-radius: .25rem;
    background-color: ${props => props.bgcolor};
`
const IconContainer = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
`


const IconButton = props => (
    <ButtonContainer>
        <IconContainer>{props.children}</IconContainer>
    </ButtonContainer>    
)

export default IconButton