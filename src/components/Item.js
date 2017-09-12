import React, { Component } from 'react';
import '../scss/Item.scss';
import Jacket from '../assets/tough-mojo-jacket-img1.png';
import JacketBack from '../assets/tough-mojo-jacket-img2.png';


class Item extends Component {
  constructor(){
    super()
    this.state = {
      itemName: 'Tough Mojo Jacket',
      descriptions: [
        '300 GRAMS OF PRIALOFT® ONE INSULATION',
        'SCHOELLER® MICROFIBER',
        'DIAGONAL QUILTING',
        'MICROFIBER RIPSTOP LINER',
        'ZIPPER GARAGE AT COLLAR',
        'ANCHORED BOTTOM-HEM ADJUSTERS',
        '3-IN-1 FRONT POCKECTS',
        'ZIPPERED CHEST POCKET',
        'TWO INTERIOR ZIPPERED POCKETS',
        'MADE IN THE PHILLIPPINES'
      ],
      bios: [
        'Our most insulated jacket to date, the city-styled Highline is designed to keep you warm during the deep freeze of winter.',
        'With 300 grams of PrimaLoft® ONE insulation, the Highline offers incredible heat retention while remaining form fitting and low volume-essentially all the puff. Its outer shell is made from a water-resistant Scheller® microfiber fabric that has been diagonally quilted, while its inside liner is made from a silky-soft microfiber ripstop nylon.',
        'The Highline features a zipper garage to prevent a cold metal zipper from pressing against your neck, non-quilted side panels and underarms dor a sleeker fit, and anchored bottom-hem adjusters for a snug fit. It has two uniquely designed 3-in-1 front pockets, which include a top-zippered entrance, a drop pocket with donut snap, and a side hand-warmer. Additional storage can be found in its exterior chest pocket and two interior zippered pockets.'
      ],
      image: Jacket,
      quantity: 1,
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large']
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({
      quantity: this.state.quantity + 1
    })
  }
  decrement(){
    if(this.state.quantity == 0) return;
    this.setState({
      quantity: this.state.quantity - 1
    })
  }
  render() {
    const descriptions = this.state.descriptions.map((description, key) => <p key={key}>{description}</p>);
    let sizes = this.state.sizes.map((size, key) => <li key={key}>{size}</li>);
    let bios = this.state.bios.map((bio, key) => <p className="bio" key={key}>{bio}</p>);


    return (
      <div className="Item">
        <div className="top-section">
          <div className="content container">
            <div className="directory col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span className="clothing">Clothing</span><span> > </span><strong>Outerwear</strong>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6 item-img">
                <img className="jacket" src={this.state.image} alt="Jacket"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 item-info">
                <h1>{this.state.itemName}<sup>®</sup></h1>
                {descriptions}
                <div className="selections">
                  <div className="borders dropdown-toggle" data-toggle="dropdown">
                    <div className="category">
                      <span>Select Size</span>
                    </div>
                    <div className="width25">
                      <span className="caret"></span>
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    {sizes}
                  </ul>
                  <div className="borders">
                    <div className="category">
                      <span>Select Color</span>
                    </div>
                    <div className="width25">
                      <span className="caret"></span>
                    </div>
                  </div>
                  <div className="borders">
                    <div className="width25" onClick={()=>{this.decrement()}}>
                      <span className="caret"></span>
                    </div>
                    <div className="width50">
                      <text type="text">{this.state.quantity}</text>
                    </div>
                    <div className="width25 flip " onClick={()=>{this.increment()}}>
                      <span className="caret"></span>
                    </div>
                  </div>
                  <div className="borders">
                    <div className="cart btn">
                      <span>Add to Cart</span>
                    </div>
                  </div>
                </div>
                  {/*<a href="#"><span className="category">Select Size</span><span className="caret"></span></a>*/}
                  {/*<a href="#"><span className="category">Select Color</span><span className="caret"></span></a>*/}
                  {/*<a href="#"><span className="caret"></span><span>{this.state.quantity}</span><span className="caret"></span></a>*/}
                  {/*<a href="#">Add To Cart</a>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image-div">
                <img src={JacketBack} alt="Back of Jacket" className="bottom-image"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 info-div">
                {bios}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Item;
