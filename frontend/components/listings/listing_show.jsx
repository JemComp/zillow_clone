import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
        // this.props.fetchListings(this.props.match.params.listingId)
        const mapOptions = {
            center: { lat: 37.66385274501688, lng: -122.4351120016871}, // this is SF
            zoom: 13
          };
      
          // wrap this.mapNode in a Google Map
          this.map = new google.maps.Map(this.mapNode, mapOptions);
        //   this.MarkerManager = new MarkerManager(this.map, this.props.openListingModal)
        //   this.MarkerManager.updateMarkers(Object.values(this.props.listings))
    }

    render() {
        return (
            <div>
                {this.props.listing.address}
                <div ref={ map => this.mapNode = map } className="listings-show-map" > 
                </div>
            </div>
        )
    }

}

export default ListingShow

