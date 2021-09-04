import request from 'superagent'

export const getMenu = () => {
  return request.get('/api/v1/menu')
    .then(response => {
      return response.body
    })
}
