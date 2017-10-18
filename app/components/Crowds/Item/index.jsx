/**
 * Created by lgl on 17/10/11.
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
class Items extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			typebtn_value: this.props['yt-data-json']['model'] == 1 ? "众筹" : "预售",
			label_value: {1:"其他",2:"音乐周边",3:"唱片制作"},
			end_value: this.props['yt-data-json']['project_status']['status'] != 8 ? "":0,
			lefttime_value: this.props['yt-data-json']['overplus_time']=="已结束"? "0":this.props['yt-data-json']['overplus_time']+"天",
			mask_value: this.props['yt-data-json']['overplus_time']=="已结束"? (<p className="end">已结束</p>): <p className="detail">查看详情</p>,
			mask: this.props['yt-data-json']['overplus_time']=="已结束"? 'maskend' :'',
		}

	}
	render() {
		return (
			<li className="pj_item">
				<div className="picbox">
					<Link className="pic">
						<img className="lazy" src={this.props['yt-data-json']['image']} />
						<div className={"mask "+this.state.mask}>
							{this.state.mask_value}
						</div>
					</Link>
				</div>
				<h4 className="title"><Link>{ this.props['yt-data-json'].title }</Link></h4>

				<div className="other">
					<span className="typebtn">{this.state.typebtn_value}</span>
					<span className="label">{this.state.label_value[this.props['yt-data-json']['type']]}</span>
				</div>
				<div className="barbox">
					<div className="total">
						<div className="hascollect" style={{width: this.props['yt-data-json']['progress']+'%'}}></div>
					</div>
					<div className="num" title="">{this.props['yt-data-json']['progress']}%</div>
				</div>
				<div className="infobox">
					<div className="hascollect ib_list">
						<p>{this.props['yt-data-json']['support_money']?this.props['yt-data-json']['support_money']/100:0}</p>
						<span className="gray">已筹金额</span>
					</div>
					<div className="lefttime ib_list middle">
						<p>{this.state.lefttime_value}</p>
						<span className="gray">剩余天数</span>
					</div>
					<div className="favorer ib_list last">
						<p>{this.props['yt-data-json']['support_number']}</p>
						<span className="gray">支持人数</span>
					</div>
				</div>
			</li>
		)
	}

}
export default Items

