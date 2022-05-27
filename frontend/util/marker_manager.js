import React from "react";


class MarkerManager {
    constructor(map, handleClick, draggable) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
        this.draggable  = (draggable) ? draggable : false;
    }

    updateMarkers(listings) {
        const listingsObj = {};
        listings.forEach(listing => listingsObj[listing.id] = listing);
    
    listings
        .filter(listing => !this.markers[listing.id])
        .forEach(newlisting => this.createMarkerFromlisting(newlisting, this.handleClick))

    Object.keys(this.markers)
        .filter(listingId => !listingsObj[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]))
    }

    createMarkerFromlisting(listing) {
        const pos = new google.maps.LatLng(listing.lat, listing.lng)
        const contentListingInfo = 
        `<div className="content-listing-info">
                <img src=${(listing.photoUrls) ? listing.photoUrls[0] : null} style='width:70px; hieght: 70px; pading-right: 15px;'/>
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
            icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", 
            draggable: this.draggable
        });

        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        marker.addListener('click', () => this.handleClick(listing.id));4
        this.markers[marker.listingId] = marker;


    }

   createMarkerFromForm(lat, lng) {
        
        if (this.markers[0]) {
            this.markers[0].setMap(null);
            delete this.markers[0];
        }
        const position = new google.maps.LatLng(lat, lng);
        const mouseOver = () => {
            marker.setIcon(this.icon2);
        };
        const mouseOut = () => {
            marker.setIcon(this.icon);
        };
        
        this.icon = {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        };
        this.icon2 = {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        };
        
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon: this.icon
        });
        marker.addListener("mouseover", mouseOver);
        marker.addListener("mouseout", mouseOut);
        this.markers[0] = marker;
    };

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }

}

export default MarkerManager