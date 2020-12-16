import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";

const PaginationWrapper = styled.div`
  width: 80%;
  padding: ${props => props.theme.spacing.xLarge} 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${props => props.isFirst ? props.theme.color.surface : props.theme.color.primary};
    pointer-events: ${props => props.isFirst ? "none" : "auto"};
    cursor: ${props => props.isFirst ? "default" : "pointer"};
  }

  a:nth-child(2) {
    color: ${props => props.isLast ? props.theme.color.surface : props.theme.color.primary};
    pointer-events: ${props => props.isLast ? "none" : "auto"};
    cursor: ${props => props.isLast ? "default" : "pointer"};
  }
`;

const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 ${props => props.theme.spacing.large};

  &:hover, &:focus {
    text-decoration: underline;
  }
`;

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement>
    </PaginationWrapper>
  );
};
