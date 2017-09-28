import * as types from '../types'
const initialState = {
  value:''
}

export default (state=initialState,action) => {
  console.log(action);
  switch (action.type) {
    case (types.SAMPLE_ACTION):
      return { ...state,value:action.payload}
      break

      default:
      return state
  }
}

