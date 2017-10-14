/**
 * Created by  lgl on 17/10/13.
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

		}

	}
	render() {
		return (
			<dl>
				<dt className="songlist_pic">
					<img src={this.props['yt-data-json']['img_url']} alt="" />
				</dt>
				<dd>

				</dd>
			</dl>


		)
	}

}
export default Items

