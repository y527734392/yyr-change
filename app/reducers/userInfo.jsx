/**
 * Created by Muyi on 17/10/17.
 */

import * as actionTypes from '../config/redux'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data

        // 修改城市
        /*case actionTypes.UPDATE_CITYNAME:
            return action.data*/

        default:
            return state
    }
}
 