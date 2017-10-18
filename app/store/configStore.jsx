/**
 * Created by Muyi on 17/10/16.
 */

import { createStore } from 'redux'
import rootReducer from 'reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}

 