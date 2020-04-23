import { useQuery } from "@apollo/react-hooks";
import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";

import GamesListItem from "./ListItem";

import * as QueryTypes from "~/codegen/queries";
import queryGetGames from "~/queries/getGame";

export type Props = {
  games: QueryTypes.GetGamesQuery["games"];
  i18n: { [key in "number" | "title"]: string };
} & ContainerProps;
export const Component: React.FC<Props> = ({ className, games, i18n }) => (
  <table
    className={classnames(
      className,
      "border-collapse",
      "border",
      "border-gray-400",
      "border-weight-2"
    )}
  >
    <thead>
      <tr className={classnames("bg-gray-200", "select-none")}>
        <th
          className={classnames(
            "border-b",
            "border-gray-400",
            "text-gray-700",
            "text-sm",
            "text-left",
            "py-2",
            "px-4"
          )}
        >
          {i18n.number}
        </th>
        <th
          className={classnames(
            "border-b",
            "border-gray-400",
            "text-gray-700",
            "text-sm",
            "text-left",
            "py-2",
            "px-4"
          )}
        >
          {i18n.title}
        </th>
      </tr>
    </thead>
    <tbody>
      {games.map((game, i) => (
        <GamesListItem
          key={game.id}
          game={game}
          className={classnames({
            "bg-gray-100": !!(i % 2),
            "bg-white": !(i % 2),
          })}
        />
      ))}
    </tbody>
  </table>
);

export type ContainerProps = {
  className?: string;
};
export const GamesList: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const { loading, data } = useQuery<
    QueryTypes.GetGamesQuery,
    QueryTypes.GetGamesQueryVariables
  >(queryGetGames, {
    variables: { lang: t("query:code") },
  });
  const games = loading ? [] : data.games;
  return (
    <Component
      {...props}
      games={games}
      i18n={{
        number: t("common:numero_sign", { context: "abbreviation" }),
        title: t("common:title"),
      }}
    />
  );
};

export default GamesList;
