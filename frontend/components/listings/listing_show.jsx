import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
        const mapOptions = {
            center: { lat: 37.66385274501688, lng: -122.4351120016871}, // this is SF
            zoom: 13
          };
      
          // wrap this.mapNode in a Google Map
          this.map = new google.maps.Map(this.mapNode, mapOptions);
        //   this.MarkerManager = new MarkerManager(this.map, this.props.openListingModal)
        //   this.MarkerManager.updateMarkers(Object.values(this.props.listings))
    }

    render(){

        if (!this.props.listing) return null;
        const { address, city, state, zip_code, sqft, beds, baths, price, photoUrls, description  } = this.props.listing
        console.log("render-props", this.props)
        
        // let lastPhotoBlur;
        // let blurContainer;
        // if (photoUrls.length % 2 === 0) {
        //     lastPhotoBlur = 'last-photo-blur-even';
        //     blurContainer = 'blur-container-even'
        // } else {
        //     lastPhotoBlur = 'last-photo-blur-odd';
        //     blurContainer = 'blur-container-odd'
        // }

        return(
            <div className="listing-div">
                <div className="listing-div-left">
                    {photoUrls.map((photoUrl, i) =>(
                        <img key={i} id={`listing-photo-${i}`} className="listing-photos" src={photoUrl} alt="listing-photo"></img>
                        ))}
                        {/* <div className={blurContainer}> */}
                            {/* <img key={photoUrls.length} className={lastPhotoBlur} src={photoUrls[0]} alt="listing-photo"></img> */}
                            {/* <div className="blur-img-text" onClick={console.log('favorite')}>Click to Favorite</div> */}
                            {/* <button className="tour-button">Request a tour</button>   */}
                            {/* maybe have button show email and say 'email owner to request tour ??' */}
                        {/* </div> */}  
                        
                        
                </div>
                <div className="listing-div-right">
                    <nav className="listing-nav-header">
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


                </div>
            </div>
        )
    }
}


export default ListingShow

