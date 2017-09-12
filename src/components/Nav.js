import React, { Component } from 'react';
import '../scss/Nav.scss';
// import Dropdown from 'rc-dropdown';
// import Menu, {SubMenu, MenuItem} from 'rc-menu'
import Dropdown from 'react-dropdown'


class Nav extends Component {
  render(){
    const options = [
      'Outerwear', 'Hiking Shoes / Boots', 'Gloves', 'Hats'
    ]

    const caret = <a href="#" className="site-link">Clothing<i className="glyphicon glyphicon-menu-down"></i></a>;
    return (
      <div className="Nav container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 site-links">
            <a href="#" className="site-link">Camping<i className="glyphicon glyphicon-menu-down"></i></a>
            <Dropdown options={options} onChange={this._onSelect} placeholder={caret} />
            <a href="#" className="site-link">Fishing<i className="glyphicon glyphicon-menu-down"></i></a>
            <a href="#" className="site-link">Hiking<i className="glyphicon glyphicon-menu-down"></i></a>
            <a href="#" className="site-link">Biking<i className="glyphicon glyphicon-menu-down"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;

