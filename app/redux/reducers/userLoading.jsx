/**
 * Created by Muyi on 17/10/17.
 */

import * as actionTypes from '../config'

const initialState = {}

export default function userLoading(state = initialState, action) {
    switch (action.type) {
        // userinfo 接口loading
        case actionTypes.USERINFO_LOADING:
            return action.data

        default:
            return state
    }
}
 