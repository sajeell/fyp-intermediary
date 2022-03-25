let URL = null
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  URL = 'http://localhost:3000/'
} else {
  URL = 'https://barganttic.herokuapp.com/'
}

export default URL
