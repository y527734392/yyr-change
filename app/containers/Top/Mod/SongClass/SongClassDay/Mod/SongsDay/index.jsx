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
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'less/xxxx';

//content
class SongsDay extends React.Component {
    render() {
        var items = [];
        console.log(this.props['yt-data-json']);
        this.props['yt-data-json']['song_list'].map((list,index)=>{
                items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
        });
        return (
            <div>123</div>
        )
    }
}
export default SongsDay

 