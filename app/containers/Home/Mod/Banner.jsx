/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe';
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */

//content
class Banner extends React.Component {
    render() {
        return (
            <div id="swipers" className="swiper banner-box">
                <div className="swiper-outer">
                    <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000,}}>
                        <div><img src="http://ugc.cdn.qianqian.com/yinyueren/pic/e9895456ef4133d33da8.jpg@w_1220,d_progressive" alt=""/></div>
                        <div><img src="http://ugc.cdn.qianqian.com/yinyueren/pic/f1695f1ec16c52bd5dfb.jpg@w_1220,d_progressive" alt=""/></div>
                        <div><img src="http://ugc.cdn.qianqian.com/yinyueren/pic/44e53408424ddc571fbc.png@w_1220,d_progressive" alt=""/></div>
                    </ReactSwipe>
                </div>
            </div>
        )
    }
}
export default Banner

 