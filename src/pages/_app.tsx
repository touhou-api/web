import { ApolloProvider } from "@apollo/react-hooks";
import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import { I18nextProvider } from "react-i18next";
import styled from "styled-components";

import client from "~/apollo";
import "~/styles/tailwind.css";
import i18n from "~/i18n";

const App = ({
  Component,
  pageProps,
  className,
}: AppProps & { className?: string }) => (
  <>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <div className={classnames(className, "min-h-screen", "bg-gray-100")}>
          <Component
            {...pageProps}
            className={classnames("m-auto", "max-w-screen-lg")}
          />
        </div>
      </I18nextProvider>
    </ApolloProvider>
  </>
);

const StyledApp = styled(App)`
  min-height: 100vh;
`;

export default StyledApp;
