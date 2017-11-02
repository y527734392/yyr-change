/**
 * Created by muyi on 2017/9/20.
 */

import React from 'react'
import { Link,IndexLink }  from 'react-router'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <li>
                { this.props.dateType === this.props.newType
                    ? this.props.data
                    : this.props.data.index ==0
                        ?<IndexLink to={this.props.data.url} activeClassName="active">{this.props.data.title}</IndexLink>
                        :<Link to={this.props.data.url} activeClassName="active">{this.props.data.title}</Link>
                 }
                <i className="tri"></i>
            </li>
        )
    }
}
export default Item