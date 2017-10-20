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
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'less/xxxx';

//content
class ArtistAll extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:false,
            initDone:false
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
                {
                    this.state.initDone
                    ?<ArtistInfoCon yt-data-json={this.state.data} />
                    :'加载中。。。'
                }

            </div>
        )
    }
    componentWillMount(){
        _.api('/indie/artist/list',{
            method:'post',
        }).then((rs)=>{
            if(rs.error_code === 22000){
                console.log('11111111111111');
                this.setState({
                    data: rs.data,
                    initDone: true
                })
            }
        });
    }
}
export default ArtistAll

 