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
        var total_top_items = [],indie_top_items = [],gufeng_top_items = [],mc_top_items = [];
        this.props['yt-data-songslist']['total_top'].map((list,index)=>{
            if(index<=9){
	            total_top_items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
            }
        });
	    this.props['yt-data-songslist']['indie_top'].map((list,index)=>{
		    if(index<=9){
			    indie_top_items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
		    }
	    });
	    this.props['yt-data-songslist']['gufeng_top'].map((list,index)=>{
		    if(index<=9){
			    gufeng_top_items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
		    }
	    });
	    this.props['yt-data-songslist']['mc_top'].map((list,index)=>{
		    if(index<=9){
			    mc_top_items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
		    }
	    });
        return (
            <div className="song-list clearfix">
                <div className="lf">
                    <SongsCon yt-data-item={total_top_items} yt-data-class="song_musician" yt-data-title="百度原创音乐榜" yt-data-type="total" yt-data-ul="/top/song"/>
                    <SongsCon yt-data-item={indie_top_items} yt-data-class="song_gufeng" yt-data-title="独立音乐榜" yt-data-type="indie" yt-data-ul="/top/song"/>
                </div>
                <div className="rf">
                    <SongsCon yt-data-item={gufeng_top_items} yt-data-class="song_indie" yt-data-title="古风榜" yt-data-type="gufeng" yt-data-ul="/top/song/gufeng"/>
                    <SongsCon yt-data-item={mc_top_items} yt-data-class="song_week" yt-data-title="一周精选" yt-data-type="mc" yt-data-ul="/top/song"/>
                </div>
            </div>
        )
    }
}
export default SongAll

 