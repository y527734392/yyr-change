/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'

/**
 * css
 */
//import 'less/xxxx';

//content
class SongsDay extends React.Component {
    render() {
        var items = [];
        this.props['yt-data-json']['song_list'].map((list,index)=>{
                items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
        });
        return (
            <div>123</div>
        )
    }
}
export default SongsDay

 