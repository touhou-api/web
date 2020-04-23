import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export type Props = {} & ContainerProps;
export const Component: React.FC<Props> = ({ className }) => (
  <header className={classnames(className, "bg-white", "shadow-sm")}>
    <div className={classnames("m-auto", "max-w-screen-xl", "h-full", "flex")}>
      <div
        className={classnames(
          "px-4",
          "w-1/4",
          "xl:w-1/5",
          "flex",
          "items-center"
        )}
      >
        <span>Touhou API</span>
      </div>
      <div className={classnames("w-3/4", "xl:w-4/5", "px-12")} />
    </div>
  </header>
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const Header: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  return <StyledComponent {...props} />;
};

export default Header;
