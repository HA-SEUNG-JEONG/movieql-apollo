import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movieql2.vercel.app/ ",
  // uri: " https://movieql2.vercel.app/ ",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
  },
  cache: new InMemoryCache(),
});

export default client;
