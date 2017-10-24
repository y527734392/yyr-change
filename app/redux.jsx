/**
 * Created by Muyi on 17/10/16.
 */

/**
 * react component
 */
import { createStore } from 'redux'

/**
 * css
 */
//import 'less/xxxx';


export default function(){
    "use strict";
    //定义规则
    function counter( state=0,action){
        switch (action.type){
            case 'Incr':
               return state + 1;
            case 'Decr':
                return state - 1;
            default :
                return state
        }
    }

    //创建 store
    let store = createStore(counter);

    //定义数据
    store.subscribe(()=>{
       //console.log('store: ', store.getState());
    });

    // 触发变化
    store.dispatch({type:'Incr'});
    store.dispatch({type:'Decr'});
    store.dispatch({type:'Decr'});
}

 