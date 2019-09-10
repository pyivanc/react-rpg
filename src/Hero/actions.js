import { HERO_MOVE } from "./actionTypes";

export function move(dispatch, x, y) {
    dispatch({
        type: HERO_MOVE,
        value: {
            x, y
        }
    })
}