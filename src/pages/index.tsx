import { useQuery } from "@apollo/react-hooks";
import classnames from "classnames";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

import * as QueryTypes from "~/codegen/queries";
import GamesList from "~/components/GamesList/List";
import queryGetGames from "~/queries/getGame";

export type Props = {} & PageProps;
export const Component: React.FC<Props> = ({ className }) => (
  <main className={classnames(className, "flex")}>
    <GamesList />
  </main>
);

export type PageProps = {
  className?: string;
  userAgent?: string;
};
export const Container: NextPage<PageProps> = (props) => {
  return <Component {...props} />;
};

export default Container;
