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
        this.props['yt-data-json']['hot_songs'].map((list,index)=>{
            if(index<20){
	            items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
            }else{
                return false;
            }
        });
        return (
            <ul className="SongsDay-box">
                {items}
            </ul>
        )
    }
}
export default SongsDay

 