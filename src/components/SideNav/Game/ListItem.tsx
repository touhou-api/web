import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import DetailMenu from "./DetailMenu";

import * as QueryTypes from "~/codegen/queries";

export type Props = {
  title: string;
  number: string;
  id: string;
} & ContainerProps;
export const Component: React.FC<Props> = ({
  className,
  title,
  number,
  id,
}) => (
  <details className={classnames(className)}>
    <summary
      className={classnames(
        "relative",
        "py-1",
        "pl-4",
        "outline-none",
        "flex",
        "items-center"
      )}
    >
      <div
        className={classnames(
          "absolute",
          "number",
          "flex",
          "items-center",
          "inset-y-0"
        )}
      >
        <span
          className={classnames(
            "text-xs",
            "text-gray-500",
            "leading-none",
            "select-none",
            "font-mono"
          )}
        >
          {number}
        </span>
      </div>
      <div className={classnames("flex-grow")}>
        <span
          className={classnames(
            "text",
            "tracking-wide",
            "text-gray-800",
            "select-none"
          )}
        >
          {title}
        </span>
      </div>
      <FontAwesomeIcon
        icon={faChevronDown}
        fixedWidth
        className={classnames("icon-open", "text-xs")}
      />
      <FontAwesomeIcon
        icon={faChevronUp}
        fixedWidth
        className={classnames("icon-close", "text-xs")}
      />
    </summary>
    <DetailMenu className={classnames("pl-4")} id={id} />
  </details>
);
export const StyledComponent: typeof Component = styled(Component)`
  summary {
    list-style: none;
    cursor: pointer;
    &::-webkit-details-marker {
      display: none;
    }
  }
  .icon-open {
    display: block;
  }
  .icon-close {
    display: none;
  }
  &[open] {
    .icon-open {
      display: none;
    }
    .icon-close {
      display: block;
    }
  }
  .number {
    margin: auto 0;
    right: 100%;
  }
`;

export type ContainerProps = {
  className?: string;
  game: QueryTypes.SideNavQuery["games"][number];
};
export const GameColumn: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const title =
    props.game?.localizedTitle?.abbreviation ??
    props.game?.localizedTitle?.title ??
    props.game.title;
  const number =
    props.game?.number && t("common:ordinal", { number: props.game.number });
  const { id } = props.game;

  return <StyledComponent {...props} title={title} number={number} id={id} />;
};

export default GameColumn;
