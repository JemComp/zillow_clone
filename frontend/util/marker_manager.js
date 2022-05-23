import React from "react";


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
        const contentListingInfo = 
        `<div className="content-listing-info">
                <img src=${listing.photoUrls[0]} style='width:70px; hieght: 70px; pading-right: 15px;'/>
                <div className="info-window">
                    <h3> $${listing.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}</h3>
                    <h2> ${listing.beds} bd ${listing.baths} ba  ${listing.sqft} sqft</h2>
                </div>
            </div>`

        const listingInfoWindow = new google.maps.InfoWindow({
            content: contentListingInfo,
            disableAutoPan: true
        });
        
        const mouseOver = () => {
            marker.infoWindow.open(this.map, marker);
            marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
        };

        const mouseOut = () => {
            marker.infoWindow.close(this.map, marker);
            marker.setIcon("https://maps.google.com/mapfiles/ms/icons/red-dot.png");
        };

        
        const marker = new google.maps.Marker({
            position: pos,
            infoWindow: listingInfoWindow,
            map: this.map,
            listingId: listing.id,
            icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });

        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        marker.addListener('click', () => this.handleClick(listing.id));
        this.markers[marker.listingId] = marker;


    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }

    

}

export default MarkerManager