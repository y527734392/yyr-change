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
import 'lessDir/components/TopSubNav';

//content
class TopSubNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            nav:{
                'song_all' : {
                    'title': '全部榜单',
                    'url': '/top',
                    'weight':true
                },
                'song_musician' : {
                    'title' : '百度原创音乐榜',
                    'url' : '/top/song',
                    'weight':true
                },
                'song_gufeng' : {
                    'title' : '古风榜',
                    'url' : '/top/song/gufeng',
                    'weight':true
                },
                'song_indie':{
                    'title' : '独立音乐榜',
                    'url' : '/top/song/indie',
                    'weight':true
                },
                'song_pop' : {
                    'title' : '流行榜',
                    'url' : '/top/song/pop'
                },
                'song_folk' : {
                    'title' : '民谣榜',
                    'url' : '/top/song/folk',
                },
                'song_rock' : {
                    'title' : '摇滚榜',
                    'url' : '/top/song/rock',
                },
            }
        }
    }
    render() {

        var items = [];
        for(var list in this.state.nav){
            items.push(<Item key={list} data={this.state.nav[list]} dateType={list} newType={this.props['yt-data-type']} />)
        }
        return (
            <div className="top-subnav">
                {items}
            </div>
        )
    }
}
export default TopSubNav

 