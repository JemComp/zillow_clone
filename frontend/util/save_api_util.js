export const createSave = (save) => {
    return $.ajax({
      method: "POST",
      url: `api/saves/`,
      data: {save}
      
    });
  };

  export const deleteSave = (saveId) => {
    return $.ajax({
      method: "DELETE",
      url: `api/saves/${saveId}`,
    });
  }; 

  