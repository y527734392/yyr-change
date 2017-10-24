/**
 * Created by muyi on 2017/9/20.
 */

import React from 'react'
import { Link }  from 'react-router'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectNav: this.props.dateType === this.props.newType ? 'on':'',
            weight: this.props.data.weight ? 'category' :'',
        }
    }
    render() {
        return (
            <li className={this.state.weight + " "+ this.state.selectNav}>
                { this.props.dateType === this.props.newType
                    ? <span>{this.props.data.title}</span>
                    :<Link to={this.props.data.url}>{this.props.data.title}</Link>
                 }
            </li>
        )
    }
}
export default Item