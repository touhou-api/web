import { useQuery } from "@apollo/react-hooks";
import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import GamesList from "./Game/List";

import * as QueryTypes from "~/codegen/queries";
import querySideNav from "~/queries/sidenav";

export type Props = {
  games: QueryTypes.SideNavQuery["games"];
} & ContainerProps;
export const Component: React.FC<Props> = ({ className, games }) => (
  <nav className={classnames(className, "overflow-y-scroll")}>
    <div className={classnames("py-8", "pl-12", "pr-8")}>
      <GamesList games={games} />
    </div>
  </nav>
);
export const StyledComponent = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const NavMenu: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<
    QueryTypes.SideNavQuery,
    QueryTypes.SideNavQueryVariables
  >(querySideNav, {
    variables: { lang: t("query:code") },
  });
  const games = loading ? [] : data.games;
  return <StyledComponent {...props} games={games} />;
};

export default NavMenu;
