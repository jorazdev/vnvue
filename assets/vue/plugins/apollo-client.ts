import { ApolloClient, ApolloLink, DefaultOptions, HttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = new HttpLink({
	// You should use an absolute URL here
	uri: 'https://vnvue.com:440/graphql'
  })

const authMiddleware = new ApolloLink((operation, forward) => {
   // add the authorization to the headers
   const token = localStorage.getItem('token')

   if (token) {
         const jwtPayload = JSON.parse(window.atob(token.split('.')[1]))
         if (Date.now() >= jwtPayload.exp * 1000) {
            localStorage.removeItem('token')
            window.location.href = '/';
         return
         }
   }

   operation.setContext({
      headers: {
      authorization: token ? `Bearer ${token}` : null
      }
   })

   return forward(operation)
})

const defaultOptions: DefaultOptions = {
   query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    }
}
// Create the apollo client
const apolloClient = new ApolloClient({
	link: authMiddleware.concat(httpLink),
	cache: new InMemoryCache({
      addTypename: false
   }),
	connectToDevTools: true,
   defaultOptions: defaultOptions
})

export default apolloClient

