/**
 * Created by Muyi on 17/10/17.
 */

import * as actionTypes from '../config'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}
export function userload(data) {
    return {
        type: actionTypes.USERINFO_LOADING,
        data
    }
}

 