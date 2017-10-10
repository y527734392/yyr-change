/**
 * Created by muyi on 2017/9/20.
 */

import React from 'react'
import { Link } from 'react-router'

import util from '../../../utils/help'
let _ = new util();

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <li className={ this.props.dateType === this.props.newType?'on':''}>
                { this.props.dateType === this.props.newType
                ? this.props.data
                : <Link to={"/admin/"+ this.props.dateType}>{this.props.data}</Link>
                }
            </li>
        )
    }
}
export default Item