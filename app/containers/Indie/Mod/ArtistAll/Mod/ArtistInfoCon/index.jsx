/**
 * Created by Muyi on 17/10/13.
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
class ArtistInfoCon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        var items = [];
        this.props['yt-data-json']['artist_list'].map((list,index)=>{
            items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
        });
        return (
            <div className="artist-infoCon">
                <ul className="artist-infoConLists clearfix">
                    {items}
                </ul>
            </div>
        )
    }
}
export default ArtistInfoCon

 