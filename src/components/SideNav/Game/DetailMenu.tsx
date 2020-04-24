import { faFileAlt, faMusic, faUser } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { LinkProps } from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import GameDetailMenuItem from "./DetailMenuItem";

export type Props = {
  i18n: { [key in "index" | "character" | "music"]: string };
  links: { [key in "index" | "character" | "music"]: LinkProps };
} & ContainerProps;
export const Component: React.FC<Props> = ({ className, i18n, links }) => (
  <div className={classnames(className)}>
    <div className={classnames("flex", "flex-col")}>
      <GameDetailMenuItem icon={faFileAlt} link={links.index}>
        {i18n.index}
      </GameDetailMenuItem>
      <GameDetailMenuItem icon={faUser} link={links.character}>
        {i18n.character}
      </GameDetailMenuItem>
      <GameDetailMenuItem icon={faMusic} link={links.music}>
        {i18n.music}
      </GameDetailMenuItem>
    </div>
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
  id: string;
};
export const DetailMenu: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const { id } = props;
  return (
    <StyledComponent
      {...props}
      i18n={{
        index: t("sidenav.index"),
        music: t("sidenav.music"),
        character: t("sidenav.character"),
      }}
      links={{
        index: { href: "/game/[id]", as: `/games/${id}` },
        music: { href: "/game/[id]", as: `/games/${id}/character` },
        character: { href: "/game/[id]", as: `/games${id}/musics` },
      }}
    />
  );
};

export default DetailMenu;
