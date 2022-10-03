// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '2fsd6w11', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2022-09-29',
  useCdn: true, // `false` if you want to ensure fresh data
})