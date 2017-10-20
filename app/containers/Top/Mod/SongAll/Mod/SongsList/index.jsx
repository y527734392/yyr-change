/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'
import SongsCon from './SongsCon'
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
class SongAll extends React.Component {
    render() {
        var items = [];
        {/*
        this.props['yt-data-songslist']['song_list'].map((list,index)=>{
            if(index<=9){
                items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
            }
        });*/}
        return (
            <div className="song-list clearfix">
                <div className="lf">
                    <SongsCon yt-data-item={items} yt-data-class="song_musician" yt-data-title="百度原创音乐榜" />
                    <SongsCon yt-data-item={items} yt-data-class="song_gufeng" yt-data-title="独立音乐榜" />
                </div>
                <div className="rf">
                    <SongsCon yt-data-item={items} yt-data-class="song_indie" yt-data-title="古风榜" />
                    <SongsCon yt-data-item={items} yt-data-class="song_week" yt-data-title="一周精选" />
                </div>
            </div>
        )
    }
}
export default SongAll

 