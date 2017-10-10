/**
 * Created by muyi on 2017/9/21.
 */

import React from 'react'
import EasyForm, { Field, FieldGroup } from 'react-easyform';

import util from '../../../../../utils/help'
let _ = new util();

class Mod extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            Reghttp:/^(((https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
            timeout:false,
        }
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {params, $error, $invalid} = this.props.easyform;

        return (
            <div className="content">
                <div className="product_set">
                    <h3>新增/编辑</h3>
                    <form className="" onSubmit={this.submit}>
                        <ul className="con">
                            <li className="">
                                <span className="title">产品名称：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品名称" name="product_name" required pattern={/^[\u4e00-\u9fa5]+$/} validMessage={{required: '请输入产品名称', pattern: '产品名不能包含汉字以外的字符'}} />
                                </div>
                            </li>
                            <li className="">
                                <span className="title">产品类别：</span>
                                <div className="txt">
                                    <FieldGroup   type="radio" name="product_type" required defaultValue={0}
                                                  validMessage={{required: '请选择类别'}}>
                                        <Field className="form-readio" label="酸奶" value="0" />
                                        <Field className="form-readio" label="鲜奶" value="1" />
                                        <Field className="form-readio" label="儿童奶" value="2" />
                                        <Field className="form-readio" label="其他" value="3" />
                                    </FieldGroup>
                                </div>
                            </li>
                            <li className="">
                                <span className="title">规格：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品名称" name="product_specifica" required pattern={/^\w+$/} validMessage={{required: '请输入产品规格', pattern: '产品规格不能包含字母数字下划线以外的字符'}} />
                                </div>
                            </li>
                            <li className="">
                                <span className="title">产地：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品产地" name="product_address" defaultValue={this.props.data.address} required pattern={/^[\u4e00-\u9fa5]+$/} validMessage={{required: '请输入产品产地', pattern: '产品产地不能包含汉字以外的字符'}} />
                                </div>
                            </li>
                            <li className="">
                                <span className="title">保质期：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品保质期" name="product_timeout" defaultValue={this.props.data.timeout} required pattern={/^[\d]+$/} validMessage={{required: '请输入产品保质期', pattern: '产品保质期不能包含数字以外的字符'}} />
                                    <span className="form-type-dec clr_3">天</span>
                                </div>
                            </li>
                            <li className="">
                                <span className="title">储藏方法：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品储藏方法" name="product_save" required pattern={/^[\u4e00-\u9fa5]+$/} validMessage={{required: '请输入产品储藏方法', pattern: '产品储藏方法不能包含汉字以外的字符'}} />
                                </div>
                            </li>
                            <li className="">
                                <span className="title">产品图片：</span>
                                <div className="txt">
                                    <Field type="text" placeholder="请输入产品图片链接" name="product_photo" required pattern={this.state.Reghttp} validMessage={{required: '请输入产品图片链接', pattern: '产品图片链接格式错误'}} />
                                </div>
                            </li>
                            <li className="">
                                <span className="title">产品详情：</span>
                                <div className="txt">
                                    <Field type="textarea" maxLength="90" placeholder="请输入产品详情" name="product_dec" required validMessage={{required: '请输入产品详情'}} />
                                </div>
                            </li>
                        </ul>
                    </form>
                    <div className={$invalid ? 'product_setBtn off' : 'product_setBtn'} onClick={$invalid ? '' : this.SubmitProduct.bind(this)}>保存</div>
                </div>
            </div>
        )
    }
    SubmitProduct (e){
        //if($(e.target).hasClass('off')){
        //    return false
        //}
        console.log(this.props.params);
    }
}
export default  EasyForm(Mod)