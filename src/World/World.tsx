import React from 'react'
import styled from 'styled-components'

import { Store } from '../store'
import Hero from '../Hero'
import Character from '../Character'
import { Character as CharacterModel } from '../models/Character'
import { captureKey } from './actions'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #cceeff
`

export default () => {
    const { state, dispatch } = React.useContext(Store)
    const npc = new CharacterModel('Paco')
    const hero = new CharacterModel('Ivan')

    return (
        <Wrapper tabIndex={0} onKeyDown={({ keyCode }) => captureKey(dispatch, keyCode)}>
            <h1>{state.count}</h1>
            <Character model={npc} />
            <Hero model={hero} />
        </Wrapper>
    )
}