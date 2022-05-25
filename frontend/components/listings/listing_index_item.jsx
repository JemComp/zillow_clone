import React from 'react';
import { Link } from 'react-router-dom';

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

          <div>
            <p id="index-item-price">${this.props.listing.price}</p>
            <p id="index-item-address">{this.props.listing.address}</p>
          </div>

        </div>
      </div>
    )
  }
}

export default ListingIndexItem;