export const createSave = (listing) => {
    return $.ajax({
      method: "POST",
      url: `api/listings/${listing.id}/create`,
      listing,
    });
  };
  
  export const deleteSave = (listing) => {
    return $.ajax({
      method: "DELETE",
      url: `api/listings/${listing.id}`,
    });
  };