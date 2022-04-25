export default function reducer(state, action) {
  if (typeof state === "undefined") {
    state = { n: false };
  }

  if (action.type === "SAVE_SETTINGS") {
    let n = action.n;
    return { ...state, n };
  } else {
    return state;
  }
}
