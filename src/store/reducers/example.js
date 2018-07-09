import * as types from '~/store/types'

const initialState = {
  data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
