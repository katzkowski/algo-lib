import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";


export const Tag = styled(props => <Link {...props} />)`
  font-size: .75rem;
  padding: ${props => props.theme.spacing.xxSmall};
  margin: 0 ${props => props.theme.spacing.xxSmall};
  text-decoration: none;
  background-color: ${props => props.theme.color.tag[props.to.slice(1)]};
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.theme.color.text};
  

  &:first-child {
    margin-left: 0;
  }

`

export const TagBar = styled.div`
  display: flex;
  align-items: flex-start;
`

