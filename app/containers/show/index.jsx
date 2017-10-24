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

/**
 * css
 */
//import 'lessDir/containers/Project';

//content
class Show extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: null,
			initDone: false
		}
	}

	render() {
		return (
			<div className="project-content">
				<div className="listtop clearfix">
					<h4 className="title">全部</h4>
					{this.props.userinfo.un}
					<div className="creat-project" onClick={this.loginHandle.bind(this)}>发起众筹</div>
				</div>
				{
					this.state.initDone
						?<Events yt-data-yt-data-events={this.state.data.list} />
						:'加载中。。。'

				}

			</div>
		)
	}
	componentWillMount(){
		_.api('/app/showstart/list',{
			method:'post',
		}).then((rs)=>{
			if(rs.error_code === 22000){
				this.setState({
					data: rs.data,
					initDone: true
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

