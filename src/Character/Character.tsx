import React from 'react'
import styled from 'styled-components'
import { Character as CharacterModel } from '../models/Character'

const Wrapper = styled.div`
    display: block;
    width: 70px;
    height: 70px;
`

const Body = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
`

const Name = styled.div``

interface Props {
    model: CharacterModel
}

export default (props: Props) => {
    return (
        <Wrapper>
            <Body></Body>
            <Name>{props.model.name}</Name>
        </Wrapper>
    )
}