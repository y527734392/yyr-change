/**
 * Created by muyi on 2017/9/17.
 */

import React from 'react'
import { Link } from 'react-router'

import Item from './Item'
class Subnav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            nav:{
                banner:'Banner',
                recommend:'推荐',
                product:'产品',
                orderuser:'订奶用户',
            }
        }
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var items = [];
        for(var list in this.state.nav){
            items.push(<Item key={list} data={this.state.nav[list]} dateType={list} newType={this.props.data}/>)
        }
        return (
            <div className="subnav">
                <ul className="item">
                    {items}
                </ul>
            </div>
        )
    }
}
export default Subnav