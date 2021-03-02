import * as React from "react";
import styled from "@emotion/styled";
import { FaTags } from "react-icons/fa";
import Flex from "~components/Layout/Flex";
import Link from "~components/Navigation/Link";

export type TagProps = {
  className?: string;
  types: Array<string>;
};

const Tag = styled.div`
  display: inline;
  margin: 0 2px;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 5px;
  color: #009eff;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  line-height: 20px;
  white-space: nowrap;
  height: 100%;

  :hover {
    color: #096dd9;
  }
`;

const Tags = ({ types }: TagProps): JSX.Element => (
  <Flex style={{ margin: "10px 0 5px 0" }}>
    <FaTags style={{ marginRight: 5, fontSize: 16 }} />
    {types.map(type => (
      <Link
        normal
        stopPropagation
        padding="0"
        texttransform="none"
        key={type}
        href={`/news/${type
          .trim()
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/ /g, "-")}`}
      >
        <Tag>{type}</Tag>
      </Link>
    ))}
  </Flex>
);

export default Tags;
