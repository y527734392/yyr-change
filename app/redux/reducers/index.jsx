/**
 * Created by Muyi on 17/10/17.
 */

import { combineReducers } from 'redux'

import userInfo from './userInfo'
import userLoading from './userLoading'

const rootReducer = combineReducers({
    userInfo,
    userLoading
})

export default rootReducer
 