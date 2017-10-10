/**
 * Created by muyi on 2017/9/20.
 */

import React from 'react'
import EasyForm, { Field, FieldGroup } from 'react-easyform';

import Subnav from '../../../Subnav'
import Mod from './Mod'
import util from '../../../../utils/help'
let _ = new util();

class Set extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(this.props.params)
        this.state = {
            Reghttp:/^(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
            timeout:false,
            data:{}
        }
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home">
                <Subnav />
                {!this.state.timeout
                ?'加载中...'
                : <Mod data={this.state.data}/>
                }
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                timeout:true,
                data : {
                    timeout:112,
                    address:'北京'
                },
            })
        },2000)
    }
}
export default Set