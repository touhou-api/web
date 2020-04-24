import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import Link, { LinkProps } from "next/link";
import React from "react";
import styled from "styled-components";

export type Props = {} & ContainerProps;
export const Component: React.FC<Props> = ({
  className,
  icon,
  children,
  link,
}) => (
  <div className={classnames(className, "flex", "items-center", "py-2")}>
    <FontAwesomeIcon
      icon={icon}
      fixedWidth
      className={classnames("text-sm", "text-gray-600", "mr-3")}
    />
    <Link {...link}>
      <a className={classnames("text-sm")}>{children}</a>
    </Link>
  </div>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
  icon: IconDefinition;
  link: LinkProps;
};
export const GameDetailMenuItem: React.FC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />;
};

export default GameDetailMenuItem;
