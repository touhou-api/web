import { ApolloProvider } from "@apollo/react-hooks";
import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import { I18nextProvider } from "react-i18next";
import styled from "styled-components";

import client from "~/apollo";
import Header from "~/components/Header/Header";
import NavMenu from "~/components/SideNav/NavMenu";
import i18n from "~/i18n";
import "~/styles/tailwind.css";

export type Props = AppProps & { className?: string };
export const AppComponent: React.FC<Props> = ({
  Component,
  pageProps,
  className,
}) => (
  <div className={classnames(className, "bg-gray-100")}>
    <Header
      className={classnames("w-full", "fixed", "top-0", "h-16", "z-50")}
    />
    <div
      className={classnames(
        "m-auto",
        "max-w-screen-xl",
        "min-h-screen",
        "flex"
      )}
    >
      <div
        className={classnames(
          "h-screen",
          "sticky",
          "pt-16",
          "top-0",
          "w-1/4",
          "xl:w-1/5"
        )}
      >
        <NavMenu className={classnames("min-h-full")} />
      </div>
      <div className={classnames("w-3/4", "xl:w-4/5", "pt-24", "px-12")}>
        <Component {...pageProps} />
      </div>
    </div>
  </div>
);
export const AppStyledComponent: typeof AppComponent = styled(AppComponent)``;

const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <AppComponent {...props} />
      </I18nextProvider>
    </ApolloProvider>
  );
};

export default App;
