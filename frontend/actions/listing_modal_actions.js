export const OPEN_LISTING_MODAL = "OPEN_LISTING_MODAL";
export const CLOSE_LISTING_MODAL = "CLOSE_LISTING_MODAL";

export const openModal = (listingId) => {
  return {
    type: OPEN_LISTING_MODAL,
    listingId,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_LISTING_MODAL,
  };
};