
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
        // .filter(listing => !this.markers[listing.id])
        .forEach(newlisting => this.createMarkerFromlisting(newlisting, this.handleClick))

    // Object.keys(this.markers)
    //     .filter(listingId => !listingsObj[listingId])
    //   .forEach((listingId) => this.removeMarker(this.markers[listingId]))
      console.log(this.markers)
    }

    createMarkerFromlisting(listing) {
        const pos = new google.maps.LatLng(listing.lat, listing.lng)
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            listingId: listing.id,
            icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });

        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;

    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
      }

}

export default MarkerManager