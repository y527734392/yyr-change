/**
 * Created by Muyi on 17/10/12.
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
class MusicClassify extends React.Component {
    render() {
        return (
            <div className="home-musicClassify">
                <div className="musicClassify-list">
                    <h4 className="title">音乐人分类</h4>
                    <ul className="lists">
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                        <li>
                            <p title="" target="_blank">流行</p>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div className="topics">
                    <a href="http://y.baidu.com/topic/alltopic" target="_blank">
                    </a>
                </div>
            </div>
        )
    }
}
export default MusicClassify

 