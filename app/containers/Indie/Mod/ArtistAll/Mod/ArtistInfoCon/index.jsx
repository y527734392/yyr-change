/**
 * Created by Muyi on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

import LoadMore from 'components/LoadMore'
import Item from './Item'
import Col from './Col'

//content
class ArtistInfoCon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            col:4
        }
    }

    render() {
        var items = {},
            cols=[];
        for(var i=0;i<=this.state.col;i++){
            items[i] = [];
            this.props['yt-data-json'].map((list,index)=>{
                for(var j=0;j<=index;j++) {
                    if (j * (this.state.col + 1) + i == index) {
                        items[i].push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
                    }
                }
            });
        }
        for(var i=0;i<=this.state.col;i++){
            cols.push(<Col key={i} yt-data-index={i} yt-data-json={items[i]} />);
        }

        return (
            <div className="artist-infoCon">
                <ul className="artist-infoConLists clearfix">
                    {cols}
                </ul>
                {
                    this.props.has_more
                    ?<LoadMore isLoadingMore={this.props.isLoadingMore} hasMore={this.props.has_more} loadMoreFn={this.props.loadMoreFn} />
                    :''
                }

            </div>
        )
    }

}
export default ArtistInfoCon

 