import * as SaveApiUtil from "../util/save_utils";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const DELETE_SAVE = "DELETE_SAVE";

export const receiveSave = (save) => {
  return {
    type: RECEIVE_SAVE,
    save,
  };
};

export const removeSave = (save) => {
  return {
    type: DELETE_SAVE,
    save,
  };
};

export const createSave = (listing) => {
  return (dispatch) => {
    return SaveApiUtil.createSave(listing).then(
      (save) => dispatch(receiveSave(save)),
    );
  };
};

export const deleteSave = (listing) => {
  return (dispatch) => {
    return SaveApiUtil.deleteSave(listing).then(
      (save) => dispatch(removeSave(save)),
    );
  };
};