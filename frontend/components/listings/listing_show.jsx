import React from "react";
import { Link } from "react-router-dom";
import MarkerManager from '../../util/marker_manager'

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(this.props)
        const mapOptions = {
            center: { lat: this.props.listing.lat, lng: this.props.listing.lng},
            zoom: 16
          };
      
          // wrap this.mapNode in a Google Map
          this.map = new google.maps.Map(this.mapNode, mapOptions);
          this.MarkerManager = new MarkerManager(this.map, this.props.openListingModal)
          this.MarkerManager.updateMarkers([this.props.listing])
    }

    isSaved() {
        let saveId = Object.keys(this.props.saves).find(key => this.props.saves[key].listing_id === this.props.listing.id)
        saveId = saveId ? saveId : -1
        console.log("isSaved", this.props, saveId)

        if (this.props.currentUser && saveId === -1) {
            return (
                <div className="save-container">
                    <button onClick={() => this.props.createSave({user_id: this.props.currentUser.id, listing_id: this.props.listing.id})}> save </button>
                </div>
            )
        } else if (this.props.currentUser && saveId != -1) {
            return (
                <div className="save-container">
                    <button onClick={() => this.props.deleteSave(saveId)}> unsave </button>
                </div>
            )
        } else {
            return (
                <div className="save-container">

                </div>
            )
        }

    }

    


    render(){

        if (!this.props.listing) return null;
        const { address, city, state, zip_code, sqft, beds, baths, price, photoUrls, description, user_id  } = this.props.listing
        console.log("render-props", this.props)
        // console.log("saves", this.props.saves)
        // console.log(this.isSaved())
        

        return(
            <div className="listing-div">
                <div className="listing-div-left">
                    {photoUrls.map((photoUrl, i) =>(
                        <img key={i} id={`listing-photo-${i}`} className="listing-photos" src={photoUrl} alt="listing-photo"></img>
                        ))}         
                        
                </div>

                <div className="listing-div-right">
                    <nav className="listing-nav-header">
                        {this.isSaved()}
                    </nav>
                    <div className="listing-physical-div">
                        <div className="listing-price-div">
                            <span className="listing-price">${price.toLocaleString(undefined, { minimumFractionDigits: 0 })}</span>
                        </div>
                        <span className="listing-physical-info">{beds} </span>
                        <span className="listing-info">bd | </span>
                        <span className="listing-physical-info">{baths} </span>
                        <span className="listing-info">ba | </span>
                        <span className="listing-physical-info">{sqft.toLocaleString(undefined, { minimumFractionDigits: 0 })} </span>
                        <span className="listing-info">sqft</span>
                    </div>
                    <div className="listing-address-div">
                        <span className="listing-address">{address}, </span>
                        <span className="listing-address">{city}, </span>
                        <span className="listing-address">{state} </span>
                        <span className="listing-address">{zip_code}</span>
                    </div>

                    
                    <div className="listings-mini-map">
                        <div ref={ map => this.mapNode = map } id='listing-map-container'>
                        </div>
                    </div>

                    <div className="listing-address-div">
                        <h3>Overview</h3>
                        <span className="listing-address">{description}</span>
                    </div>

                    <div>
                        {(this.props.currentUser && this.props.currentUser.id === user_id) ? 
                        <div className="show-edit-link-container">
                            <Link className='show-edit-link' onClick={this.props.closeModal} to={`/listings/${this.props.listing.id}/edit`}>Edit your listing</Link>
                        </div> : 
                        null}
                    </div>

                </div>
            </div>
        )
    }
}


export default ListingShow
