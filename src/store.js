import React from 'react'
import { HERO_MOVE } from './Hero/actionTypes'
import { WORLD_KEY_CAPTURE } from './World/actionTypes'

export const Store = React.createContext()

const initialState = {
    hero: {
        x: 0,
        y: 0,
    },
    world: {
        keyCapture: null,
    }
}

export function reducer(state, action) {
    switch (action.type) {
        case HERO_MOVE:
            return {
                ...state,
                hero: {
                    ...state.hero,
                    x: action.value.x,
                    y: action.value.y,
                }
            }
        case WORLD_KEY_CAPTURE:
            return {
                ...state,
                world: {
                    ...state.world,
                    keyCapture: action.value,
                }
            }
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const value = { state, dispatch }
    return <Store.Provider value={value} >{props.children}</Store.Provider>
}