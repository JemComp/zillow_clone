import React from 'react';
import { Link } from 'react-router-dom';
// import {AiOutlineHeart} from 'react-icons/Ai'

class ListingIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="listing-index-item">
        <div onClick={() => this.props.openListingModal(this.props.listing.id)}>

          <img className="index-listing-photos" 
          src={this.props.listing.photoUrls[0]? this.props.listing.photoUrls[0] : null} 
          alt="listing main photo"></img>

          <div className='listing-item-info'>
            <p id="index-item-price">${this.props.listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
            <div className='listing-item-info-span'>
                <span>{this.props.listing.beds} </span>
                <span>bd   </span>
                <span>{this.props.listing.baths} </span>
                <span>ba   </span>
                <span>{this.props.listing.sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} </span>
                <span>sqft  -  House for sale</span>
            </div>
            <p id="index-item-address">{this.props.listing.address}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default ListingIndexItem;