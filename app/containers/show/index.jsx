/**
 * Created by lgl on 17/10/19.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'reduxActions/index'

import Events from 'components/Events'
import Criteria from './Criteria'

/**
 * css
 */
import 'less/containers/Show';

//content
class Show extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			showListData: null,
			criteriaData: null,
			initDone: false
		}
	}

	render() {
		return (
			<div className="show-content">

				{
					this.state.initDone
						?<div className="show-list">
							<Criteria yt-data-criteria={this.state.criteriaData}/>
							<Events yt-data-events={this.state.showListData.list} />
						</div>
						:'加载中。。。'

				}

			</div>
		)
	}
	componentWillMount(){
		_.api('/plaza/show/list',{
			method:'post',
			data:{
				start_time:this.props.params.start_time,
				end_time:this.props.params.end_time,
				page:this.props.params.page,
			}

		}).then((rs)=>{
			if(rs.error_code === 22000){
				this.setState({
					showListData: rs.data,
				})
				_.api('/plaza/show/criteria',{
					method:'post',
					data:{
						start_time:this.props.params.start_time,
						end_time:this.props.params.end_time,
						page:this.props.params.page,
					}
				}).then((rs)=>{
					if(rs.error_code === 22000){
						this.setState({
							criteriaData: rs.data,
							initDone: true
						})
					}
				})
			}
		});
	}

	// 处理登录之后的事情
	loginHandle(username) {
		// 保存用户名
		/*const actions = this.props.userInfoActions
		let userinfo = this.props.userinfo
		userinfo.username = username
		actions.update(userinfo)

		const params = this.props.params
		const router = params.router
		if (router) {
			// 跳转到指定的页面
			hashHistory.push(router)
		} else {
			// 跳转到用户主页
			this.goUserPage()
		}*/
	}
}
function mapStateToProps(state) {
	return {
		userinfo: state.userInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		Actions: bindActionCreators(Actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Show)

