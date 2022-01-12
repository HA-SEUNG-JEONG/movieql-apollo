import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movieql2.vercel.app/ ",
  // uri: " https://movieql2.vercel.app/ ",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: { isLiked: (isLiked) => !isLiked },
        });
      },
    },
  },
  cache: new InMemoryCache(),
});

export default client;
