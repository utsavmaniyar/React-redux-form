export default function infos(state = [], action) {
  switch (action.type) {
    case 'CREATE_NEW_USER': {
      return state.concat(action.payload.userInfo);
    }
    default:
      return state;
  }
}
