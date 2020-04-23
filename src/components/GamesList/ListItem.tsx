import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import * as QueryTypes from "~/codegen/queries";

export type Props = {
  id: string;
  number?: string;
  title: string;
} & ContainerProps;
export const Component: React.FC<Props> = ({
  className,
  id,
  number,
  title,
}) => (
  <tr className={classnames(className)}>
    <td className={classnames("py-1", "px-4")}>
      <p>
        {number && (
          <strong className={classnames("text-sm", "block", "font-bold")}>
            {number}
          </strong>
        )}
      </p>
    </td>
    <td className={classnames("py-1", "px-4")}>
      <p>
        <Link href="/games/[id]" as={`/games/${id}`}>
          <a className={classnames("text-sm", "hover:underline")}>{title}</a>
        </Link>
      </p>
    </td>
  </tr>
);

export type ContainerProps = {
  className?: string;
  game: QueryTypes.GetGamesQuery["games"][number];
};
export const GamesListItem: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const number =
    props.game?.number && t("common:ordinal", { number: props.game.number });
  const title =
    props.game?.localizedTitle?.longTitle ??
    props.game?.localizedTitle.title ??
    props.game.title;
  return <Component {...props} {...props.game} number={number} title={title} />;
};

export default GamesListItem;
