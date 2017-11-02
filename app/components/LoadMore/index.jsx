/**
 * Created by Muyi on 17/10/25.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

//content
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="load-more loading-pos" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <div className="y_loading"></div>
                    : <div className="loadMore" onClick={this.loadMoreHandle.bind(this)}>加载更多</div>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.loadMoreFn();
    }

    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;
        function callback() {
            const top = wrapper.getBoundingClientRect().top && wrapper.getBoundingClientRect().top - 500;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn();
            }
        }
        $(window).on('scroll', ()=> {
            //加载中时 return false
            if (this.props.isLoadingMore) {
                return false;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            //滑动 每隔50ms触发一次
            timeoutId = setTimeout(callback, 50);
        });
    }
}

export default LoadMore

 