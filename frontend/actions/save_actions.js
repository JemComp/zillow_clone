
  
import * as SaveApiUtil from "../util/save_api_util";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const DELETE_SAVE = "DELETE_SAVE";
export const RECEIVE_ALL_SAVES = "RECEIVES_ALL_SAVES"

const receiveSave = (save) => {
  return {
    type: RECEIVE_SAVE,
    save
  };
};

const removeSave = (saveId) => {
  return {
    type: DELETE_SAVE,
    saveId
  };
};

export const createSave = (save) => dispatch => {
    return SaveApiUtil.createSave(save).then(
      (save) => dispatch(receiveSave(save)),
    );
};

export const deleteSave = (saveId) => {
  return (dispatch) => {
    return SaveApiUtil.deleteSave(saveId).then(
      (save) => dispatch(removeSave(save.id)),
    );
  };
};