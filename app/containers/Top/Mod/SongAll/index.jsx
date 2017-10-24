/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import TopSubNav from 'components/TopSubNav'
import SongsList from './Mod/SongsList'
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
class TopHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:false,
            initDone:false
        }
    }
    render() {
        return (
            <div className="top-songAll clearfix">
                <TopSubNav yt-data-type="song_all" />
                {this.state.initDone
                    ? <SongsList yt-data-songslist={this.state.data} yt-data-type="song-musician" />
                    : '正在加载。。。'
                }
            </div>
        )
    }

    componentWillMount(){
        _.api('/plaza/top',{
            method:'post',
	        data:{
                type:'total'//百度原创音乐榜
            }
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.setState({
                    data: {total_top:rs.data},
                });
	            _.api('/plaza/top',{
		            method:'post',
		            data:{
			            type:'indie'//独立音乐榜
		            }
	            }).then((rs)=>{
		            if(rs.error_code === 22000){
			            this.setState({
				            data: $.extend(this.state.data,{indie_top:rs.data}),
			            });
			            _.api('/plaza/top',{
				            method:'post',
				            data:{
					            type:'gufeng'//古风榜
				            }
			            }).then((rs)=>{
				            if(rs.error_code === 22000){
					            this.setState({
						            data: $.extend(this.state.data,{gufeng_top:rs.data}),
					            });
					            _.api('/plaza/top',{//一周精选
						            method:'post',
						            data:{
							            type:'mc'
						            }
					            }).then((rs)=>{
						            if(rs.error_code === 22000){
							            this.setState({
								            data: $.extend(this.state.data,{mc_top:rs.data.mcTop}),
								            initDone: true
							            });
						            }
					            });
				            }
			            });
		            }
	            });
            }
        });
    }
}
export default TopHome

 