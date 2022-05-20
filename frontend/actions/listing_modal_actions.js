export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (listingId) => {
  return {
    type: OPEN_MODAL,
    listingId,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};