import React from "react";
import MarkerManager from "../../util/marker_manager";

class ListingMap extends React.Component {
    constructor(props) {
        super(props)

    }
  
    componentDidMount() {
      // set the map to show SF
      const mapOptions = {
        center: { lat: 37.66385274501688, lng: -122.4351120016871}, // this is SF
        zoom: 13
      };
  
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map)
      this.MarkerManager.updateMarkers(Object.values(this.props.listings))

    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(Object.values(this.props.listings))
    }
  
    render() {
      return (
        // ...
        <div ref={ map => this.mapNode = map } className="listings-index-map" > 
        </div>
      )
    }
  
  }

  export default ListingMap