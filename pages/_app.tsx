import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client/react";
import client from "../providers/apollo-client";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
