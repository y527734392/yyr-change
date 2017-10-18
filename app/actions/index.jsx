/**
 * Created by Muyi on 17/10/17.
 */

import * as actionTypes from '../config/redux'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

 