//Action creator
export const selectSong = song => {
  //return an action
  return {
    type: 'SONG_SELECTED',
    payload: song

  };
};

// name export to export different fuctions
