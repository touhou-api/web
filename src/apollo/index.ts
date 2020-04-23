import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-boost";
import fetch from "isomorphic-fetch";

import introspectionQueryResultData from "~/codegen/fragment.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.API_PATH,
    credentials: "same-origin",
    fetch,
  }),

  cache: new InMemoryCache({ fragmentMatcher }).restore({}),
});

export default client;
