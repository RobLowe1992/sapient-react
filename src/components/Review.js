import React, { Component } from 'react';
import '../scss/Review.scss';
import reviewer1 from '../assets/reviewer1.png';
import reviewer2 from '../assets/reviewer2.png';
import StarRating from 'react-star-rating';
import Modal from 'react-modal';


class Review extends Component {
  constructor(){
    super()
    this.state = {
      modalIsOpen: false,
      reviews: [
        {
          pic: reviewer1,
          name: 'Shaun White',
          title: 'This Thing is a monster!',
          description: 'I picked up this jacket for use in San Francisco and the surrounding Bay Area (Lake Tahoe included). I use this jacket for everything. It is often cloudy/drizzly/cold in SF and this jacket deals with it al.l I nave not tried in heavy rain, but in drizzly conditions the DWR treatment deﬁnitely makes small drops bead right off. It also has a nice ﬂeece-like liner inside and keeps me really warm down to 40 degrees or so. In Tahoe I have used this with a shirt or base layer, mid layer ﬂeece, and then this jacket. I don\'t get cold too easily but in temps 20\'s - 30\'s I felt great (with some gloves and a beanie of course)I have not tried it skiing yet because I snowboard and to be honest it wouldn\'t be quite large enough (i like baggier\ snowboard clothing). But i nave seen people who wear softshells skiing all the time. I also use this when I go to work and want a jacket that dresses up nice. With slacks, nice shoes, and a button up it looks great. I am 6\' and about 190 lbs (34 in arms) and the large fits perfect. The pockets are well designed as well The soft shell is the new \'do-everytning\' jacket wind/water resistent but also maleable and comfy for wearing anywhere. I highly recommend this jacket.',
          rating: 4,
          date: '08/20/2013'
        },{
          pic: reviewer2,
          name: 'Jennie Loren',
          title: 'Luv it so much I bought 2!',
          description: 'Loved this jacket so much from previous years I decided to buy a second in a different color. I\'m tall and fairly slender and its tailored silhouette fits me nicely. For perspective I\'m around 6\'3" ~150 lbs and a large does the trick. I\'ll wear this for all of fall and into the winter. Despite not being bulky or baggy I ﬁnd it good and warm for anything down to 40 degrees and perhaps lower if you\'re keeping up on your layering. For weather at freezing or below you should consider something heavier.',
          rating: 3,
          date:'01/12/2013'
        }
      ]
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    var reviews = this.state.reviews.map((review, key) => (
      <div key={key} className="row review">
        <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 reviewer-identity">
          <img src={review.pic} alt="Reviewer"/>
          <span className="reviewer-name">{review.name}</span>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 reviewer-details">
              <span><strong>{review.title}</strong></span>
              <span>{review.date}</span>
              <StarRating totalStars={review.rating} name='Rating' size={20}/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p className="reviewer-description">{review.description}</p>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="Review">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-xs-offset-2 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-2 reviews">
              <h1>Review</h1>
              <span onClick={this.openModal}>Write a review on this product</span>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Review"
              >
                <div className="row Modal">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 modal-header">
                    <span>Please Rate the Tough Mojo Jacket</span>
                    <StarRating totalStars={5} name='Rating' size={20}/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <span>Review Title:</span>
                    <input className="modal-title" type="text"/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <textarea className="modal-text" rows={5} placeholder="- Write your review here - "/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <a href="/" className="btn">Submit Review</a>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="row">
            {reviews}
          </div>
        </div>
      </div>
    )
  }
}

export default Review;
