import classnames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export type Props = {} & ContainerProps;
export const Component: React.FC<Props> = ({ className }) => (
  <div className={classnames(className)} />
);
export const StyledComponent: typeof Component = styled(Component)``;

export type ContainerProps = {
  className?: string;
};
export const Template: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  return <StyledComponent {...props} />;
};

export default Template;
