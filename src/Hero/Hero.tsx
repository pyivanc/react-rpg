import React from 'react'
import styled from 'styled-components'
import { Character as CharacterModel } from '../models/Character'
import { Store } from '../store'

const MOVEMENT_KEYCODES = {
    DOWN: [40, 83],
    RIGHT: [39, 68],
    UP: [38, 87],
    LEFT: [37, 65]
}

let allKeycodes = Object.values(MOVEMENT_KEYCODES).reduce((prev, next) => prev.concat(next), [])


const Wrapper = styled.div`
    display: block;
    width: 70px;
    height: 70px;
`

const Body = styled.div`
    width: 50px;
    height: 50px;
    background-color: blue;
`

const Name = styled.div``

interface Props {
    model: CharacterModel
}

export default (props: Props) => {
    const { state, dispatch } = React.useContext(Store)
    React.useEffect(() => {
        const keyCode = state.world.keyCapture
        if (MOVEMENT_KEYCODES.DOWN.includes(keyCode)) {
            console.log('down')
        }
        if (MOVEMENT_KEYCODES.RIGHT.includes(keyCode)) {
            console.log('right')
        }
        if (MOVEMENT_KEYCODES.UP.includes(keyCode)) {
            console.log('up')
        }
        if (MOVEMENT_KEYCODES.LEFT.includes(keyCode)) {
            console.log('left')
        }
    }, [state.world.keyCapture])
    return (
        <Wrapper>
            <Body></Body>
            <Name>{props.model.name}</Name>
        </Wrapper>
    )
}