require('dotenv').config()

if (
  typeof process.env.CLOUDINARY_URL === 'undefined' ||
  typeof process.env.USER_NAME === 'undefined'
) {
  if (typeof process.env.CLOUDINARY_URL === 'undefined') {
    console.log('check CLOUDINARY_URL')
  }
  if (typeof process.env.USER_NAME === 'undefined') {
    console.log('check USER_NAME')
  }

  console.warn('Double Check environment variables')
} else {
  console.log('Good to Go')
}
