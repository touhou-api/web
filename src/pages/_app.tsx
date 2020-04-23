import { ApolloProvider } from "@apollo/react-hooks";
import classnames from "classnames";
import { AppProps } from "next/app";
import React from "react";
import { I18nextProvider } from "react-i18next";
import styled from "styled-components";

import client from "~/apollo";
import "~/styles/tailwind.css";
import NavMenu from "~/components/SideNav/NavMenu";
import i18n from "~/i18n";

export type Props = AppProps & { className?: string };
export const AppComponent: React.FC<Props> = ({
  Component,
  pageProps,
  className,
}) => (
  <div className={classnames(className, "bg-gray-100")}>
    <div
      className={classnames(
        "m-auto",
        "max-w-screen-xl",
        "min-h-screen",
        "flex"
      )}
    >
      <NavMenu
        className={classnames(
          "h-screen",
          "sticky",
          "top-0",
          "w-1/4",
          "xl:w-1/5"
        )}
      />
      <Component {...pageProps} className={classnames("w-3/4", "xl:w-4/5")} />
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
