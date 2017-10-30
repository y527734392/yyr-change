/**
 * Created by lgl on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

/**
 * css
 */
import 'less/containers/Show';

//content
class Criteria extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {


		}
	}
	render() {
		var city_items = [],
			year_items = [],
			month_items = [],
			month_list = ['01','02','03','04','05','06','07','08','09','10','11','12',],
			start_time = this.props['yt-data-criteria']['city_info']['start_time'],
			start_time_stamp = this.props['yt-data-criteria']['city_info']['start_time']?this.props['yt-data-criteria']['city_info']['start_time']:Date.parse(new Date())/1000,
			start_time_year = _.formateTime(start_time_stamp,'yyyy'),
			cur_city_code = this.props['yt-data-criteria']['city_info']['cur_city'].code;
		//显示城市
		this.props['yt-data-criteria']['city_info'].list.map((list,index)=>{
			if(cur_city_code !== list.cityentry[0].code){
				city_items.push(<li key={index}>{list.cityentry[0].name}</li>)
			}else{
				city_items.push(<li key={index} className="on">{list.cityentry[0].name}</li>)
			}
		});
		//显示年份
		if(this.props['yt-data-criteria']['city_info']['start_time'] === 0){
			year_items.push(<li className="on">全部</li>)
		}else{
			year_items.push(<li><Link to="">全部</Link></li>)
		}
		for(var year in this.props['yt-data-criteria']['year_month']){
			if(_.formateTime(start_time,'yyyy')===year){
				year_items.push(<li key={year} className="on">{year}</li>)
			}else{
				year_items.push(<li key={year}><Link>{year}</Link></li>)
			}
		}
		//显示月份
		for(var month in month_list){
			if(this.props['yt-data-criteria']['year_month'][start_time_year][month_list[month]] === 1){
				month_items.push(<li className="on" key={month}>{month_list[month]}月</li>)
			}else{
				month_items.push(<li key={month}><Link>{month_list[month]}月</Link></li>)
			}
		}

		return (
			<div className="Criteria_info">
				<div className="city_info clearfix">
					<p>演出城市</p>
					<ul className="city_list">
						{city_items}
					</ul>

				</div>
				<div className="date_info clearfix">
					<p>演出时间</p>
					<div className="date_con">
						<ul className="year_list">
							{year_items}
						</ul>
						<ul className="month_list">
							{month_items}
						</ul>
					</div>


				</div>

			</div>
		)
	}

}
export default Criteria

