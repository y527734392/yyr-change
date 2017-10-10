/**
 * Created by muyi on 2017/9/17.
 */

import React from 'react'
import { Link } from 'react-router'

import Subnav from '../../Subnav'
class Product extends React.Component {
    render() {
        return (
            <div className="home">
                <Subnav data="product"/>
                <div className="content">
                    <div className="product">
                        <div className="top clearfix">
                            <h3>产品列表</h3>
                            <div className="creat"><Link to="/admin/productedit/add">新增</Link></div>
                        </div>
                        <div className="pro_list">
                            <div className="pl_top clearfix">
                                <p className="title_pic"></p>
                                <p className="title_category">类别</p>
                                <p className="title_name">名称</p>
                                <p className="title_shelfLife">保质期</p>
                                <p className="title_time">创建/修改时间</p>
                                <p className="title_set">操作</p>
                            </div>
                            <ul>
                                <li className="clearfix">
                                    <p className="title_pic"><span><img src="//mu3.bdstatic.com/static/i/0wZ8LbEK.jpg" alt=""/></span></p>
                                    <p className="title_category">酸奶</p>
                                    <p className="title_name">视界鲜酸奶</p>
                                    <p className="title_shelfLife">12天</p>
                                    <p className="title_time">2017-09-07</p>
                                    <p className="title_set">
                                        <Link to="/admin/productedit/set"><span>编辑</span></Link>
                                        <span>删除</span>
                                    </p>
                                </li>
                                <li className="clearfix">
                                    <p className="title_pic"><span><img src="//mu3.bdstatic.com/static/i/0wZ8LbEK.jpg" alt=""/></span></p>
                                    <p className="title_category">酸奶</p>
                                    <p className="title_name">视界鲜酸奶</p>
                                    <p className="title_shelfLife">12天</p>
                                    <p className="title_time">2017-09-07</p>
                                    <p className="title_set">
                                        <Link to="/admin/productedit/set"><span>编辑</span></Link>
                                        <span>删除</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export  default Product