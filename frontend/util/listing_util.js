
  
export const fetchListings = () => $.ajax({
    url: `/api/listings`,
    method: "GET"
});

export const fetchListing = listingId => $.ajax({
    url: `/api/listings/${listingId}`,
    method: "GET"
});

export const createListing = FormData => $.ajax({
    url: `/api/listings`,
    method: `POST`,
    data: FormData,
    // data: { listing },
    processData: false,
    contentType: false,
});

export const updateListing = FormData => $.ajax({
    url: `/api/listings/${FormData.get("id")}`,
    method: `PATCH`,
    data: FormData,
    // data: { listing },
    processData: false,
    contentType: false,
});

export const deleteListing = listingId => {
    // debugger
    return $.ajax({
        url: `/api/listings/${listingId}`,
        method: 'DELETE'
    });
}