import _fetch from '~/utils/_fetch'
import * as types from '~/store/types'

export const getData = () => async (dispatch) => {
  const [err, data] = await _fetch('https://reqres.in/api/unknown')
  if (err) {
    return console.log('Error happened:', err.status)
  } else {
    dispatch({
      type: types.SET_DATA,
      payload: { data }
    })
    return data
  }
}
