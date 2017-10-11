/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'lessDir/xxxx';

//content
class Songs extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <h3>{this.props['yt-data-title']}</h3>
                {console.log(this.props['yt-data-songs'])}
                <ul class="cf">
                    <li class="cover-hook" data-sids="" data-aid="">
                        <a href="/song/" class="cover" title="">
                            <a href="/song/albums/" class="cover" title="">
                                <div class="cover_songs_bg">
                                    <img src="" />
                                </div>
                                <span class="play-btn-track cover-hook-play"></span>
                                <span class="icon-play cover-hook-play"></span>
                                <span class="icon-cover"></span>
                            </a>
                            <a href="/song/" class="name" title="">
                                <a href="/song/albums/" class="name" title="">
                                    </a>
                                <a href="" class="artist" title=""></a>
                                <span class="icon-cover"></span>
                            </a>
                        </a>

                    </li>

                </ul>
            </div>
        )
    }


}
export default Songs

 