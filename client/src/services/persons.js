import axios from 'axios'


const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/persons`

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const remove = (id) => {
  const url = `${baseUrl}/${id}`
  const request = axios.delete(url)
  return request.then((response) => response.data)
}

const update = (personObject) => {
  const url = `${baseUrl}/${personObject.id}`
  const request = axios.put(url, personObject)
  return request.then((response) => response.data)
}

export default { getAll, create, remove, update }