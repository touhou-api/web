import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export type Props = {} & ContainerProps;
export const Component: React.FC<Props> = ({ className }) => (
  <nav className={classnames(className, "overflow-y-scroll")}>
    <div className={classnames("p-8")}>
      <p>Touhou API</p>
    </div>
  </nav>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const NavMenu: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  return <StyledComponent {...props} />;
};

export default NavMenu;
