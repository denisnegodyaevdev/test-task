import axios from 'axios'
import { compose, withHandlers } from 'recompose'
export default compose(
  withHandlers({
    getPeople: () => async () =>
      axios.get('https://reqres.in/api/users?page=2'),
    getOnePeople: () => async id =>
      axios.get(`https://reqres.in/api/users/${id}`)
  })
)
