import * as ListingAPIUtil from "../util/listing_util"

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS"
export const RECEIVE_LISTING = "RECEIVE_LISTING"
export const REMOVE_LISTING = "REMOVING_LISTING"


const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
  });
  
  const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
  });
  
  const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
  });

  export const fetchAllListings = () => dispatch => (
    ListingAPIUtil.fetchListings()
      .then(listings => dispatch(receiveAllListings(listings)))
  );

  export const fetchListing = (listingId) => dispatch => (
    ListingAPIUtil.fetchListing(listingId)
      .then(listing => dispatch(receiveListing(listing)))
  );


export const createListing = (listing) => dispatch => {
    return ListingAPIUtil.createListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const updateListing = (listing) => dispatch => {
    return ListingAPIUtil.updateListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const deleteListing = (listingId) => dispatch => {
    return ListingAPIUtil.deleteListing(listingId)
        .then(_ => dispatch(removeListing(listingId)))
}