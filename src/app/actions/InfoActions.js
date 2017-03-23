export const CREATE_NEW_USER ='CREATE_NEW_USER';
export const RECEIVE_ALL_INFOS = 'RECEIVE_ALL_INFOS';

export function createNewUser(userInfo) {
  return {
    type: CREATE_NEW_USER,
    payload: { userInfo },
  };
}

export function getAllInfos(clientInfos) {
  return {
    type: 'RECEIVE_ALL_INFOS',
    payload: { clientInfos },
  };
}

export function loadingNotification(note) {
  return {
    type: 'LOADING_NOTIFICATION',
    payload: {note}
  };
}
export function doneNotification(note) {
  return {
    type: 'DONE_NOTIFICATION',
    payload: {note}
  };
}
