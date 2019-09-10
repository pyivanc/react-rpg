import { WORLD_KEY_CAPTURE } from "./actionTypes";

export function captureKey(dispatch, key) {
    dispatch({
        type: WORLD_KEY_CAPTURE,
        value: key,
    })
}