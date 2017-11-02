/**
 * Created by Muyi on 17/10/14.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'reduxActions/index'

import Crowds from 'components/Crowds'


/**
 * css
 */
import 'less/containers/Project';

//content
class Project extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:[],
            initDone:false,
            isLoadingMore:false,
            hasMore:false,
            page:0,
            size:20,
        }
    }

    render() {
        return (
            <div className="project-content">
                <div className="listtop clearfix">
                    <h4 className="title">全部</h4>
                    <div className="creat-project loading-pos">
                        {
                            this.props.userLoading
                            ?<div className="creat-project-btn" onClick={this.loginHandle.bind(this)}>发起众筹</div>
                            :<div className="y_loading"></div>
                        }
                    </div>

                </div>
                {
                    this.state.initDone
                    ?<Crowds yt-data-crowds={this.state.data} hasMore={this.state.hasMore} isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                    :'加载中。。。'

                }

            </div>
        )
    }


    componentDidMount(){
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        //整合 接口所需参数
        const apiData = {};
        apiData.page = this.state.page;
        apiData.size = this.state.size;

        _.api('/app/crowd/project/list',{
            method:'post',
            data:apiData
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.resultHandle(rs);
            }
        });
    };
    // 处理数据
    resultHandle(rs) {
        const page = this.state.page+1;
        const data = rs.data.list;
        const hasMore = +rs.data.total_count <= this.state.data.concat(data).length?false:true;
        this.setState({
            initDone: true,
            hasMore:hasMore,
            page:page,
            // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
            data: this.state.data.concat(data)
        })
    };
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        });
        //整合 接口所需参数
        const apiData = {};
        apiData.page = this.state.page;
        apiData.size = this.state.size;

        _.api('/app/crowd/project/list',{
            method:'post',
            data:apiData
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.resultHandle(rs);
                this.setState({
                    isLoadingMore: false
                })
            }
        });
    };
    // 发起众筹
    loginHandle(username) {
        //

    };
}
function mapStateToProps(state) {
    return {
        userinfo: state.userInfo,
        userLoading: state.userLoading
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
)(Project)

 