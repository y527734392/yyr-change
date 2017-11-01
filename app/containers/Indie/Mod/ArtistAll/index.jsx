/**
 * Created by Muyi on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import IndieSubNav from 'components/IndieSubNav'
import ArtistInfoCon from './Mod/ArtistInfoCon'


/**
 * css
 */
//import 'less/xxxx';

//content
class ArtistAll extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:[],
            initDone:false,
            isLoadingMore:false,
            has_more:false,
            api:{
                offset:0,
                num:20,
                order:'hot',
                genre:'all',
                gender:'all',
            }
        }
    }
    render() {
        return (
            <div className="indie-artistAll">
                <IndieSubNav />
                <ul className="indie-order clearfix">
                    <li className="on">
                        <Link>热门</Link>
                    </li>
                    <li>
                        <Link>最新</Link>
                    </li>
                </ul>
                <div className="loading-pos">
                    {
                        this.state.initDone
                        ?<ArtistInfoCon yt-data-json={this.state.data} has_more={this.state.has_more} isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        :<div className="y_loading"></div>
                    }
                </div>

            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        const apiData = this.state.api;
        _.api('/indie/artist/list',{
            method:'post',
            data:apiData
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.resultHandle(rs)
            }
        });

    }
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        });

        const apiData = this.state.api;
        _.api('/indie/artist/list',{
            method:'post',
            data:apiData
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.resultHandle(rs);
                this.setState({
                    //api:{
                    //    offset: this.state.api.offset + this.state.api.num,
                    //},
                    isLoadingMore: false
                })
            }
        });
    }
    // 处理数据
    resultHandle(rs) {
        const offset = rs.data.offset;
        const data = rs.data.artist_list;
        const has_more = rs.data.has_more;
        this.setState({
            initDone: true,
            has_more:has_more,
            api: {
                offset:offset,
            },
            // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
            data: this.state.data.concat(data)
        })

    }
}
export default ArtistAll

 