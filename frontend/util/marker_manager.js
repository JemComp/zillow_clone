
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
    }

    updateMarkers(listings) {
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);
    
    listings
      .forEach(newlisting => this.createMarkerFromlisting(newlisting, this.handleClick))

    Object.keys(this.markers)
      .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromlisting(listing) {
        console.log(listing.lat, listing.lng)
        const pos = new google.maps.LatLng(listing.lat, listing.lng)
        const marker = new google.maps.Marker({
            pos,
            map: this.map,
            listingId: listing.id
        });

    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
      }

}

export default MarkerManager