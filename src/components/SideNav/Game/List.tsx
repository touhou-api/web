import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ListItem from "./ListItem";

import * as QueryTypes from "~/codegen/queries";

export type Props = {
  i18n: { [key in "title"]: string };
} & ContainerProps;
export const Component: React.FC<Props> = ({ className, games, i18n }) => (
  <div className={classnames(className, "flex", "flex-col")}>
    <span
      className={classnames(
        "font-bold",
        "text-gray-500",
        "select-none",
        "mb-2"
      )}
    >
      {i18n.title}
    </span>
    {games.map((game, i) => (
      <ListItem game={game} key={i} />
    ))}
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
  games: QueryTypes.SideNavQuery["games"];
};
export const Template: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  return (
    <StyledComponent {...props} i18n={{ title: t("sidenav.game_title") }} />
  );
};

export default Template;
