import * as React from "react";
import styled from "@emotion/styled";
import Flex from "~components/Layout/Flex";
import Link from "~components/Navigation/Link";

export type TagTypes = "nvidia" | "amd" | "intel" | "youtube" | string;

export type TagProps = {
  className?: string;
  types: Array<TagTypes>;
};

const Tag = styled.div<{
  type?: TagTypes;
}>`
  display: inline;
  margin: 0 5px;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  background: ${({ type }) => {
    switch (type) {
      case "nvidia":
        return "#76b900";
      case "amd":
        return "#ef0707";
      case "intel":
        return "#0071c5";
      case "youtube":
        return "#ff0000";
      default:
        return "blue";
    }
  }};
  color: #fff;
  height: 100%;
`;

const Tags = ({ types }: TagProps): JSX.Element => (
  <Flex direction="row" style={{ marginBottom: 10 }}>
    {types.map(type => (
      <Link
        normal
        stopPropagation
        padding="0"
        texttransform="none"
        key={type}
        href={`/news/${type}`}
      >
        <Tag type={type}>{type}</Tag>
      </Link>
    ))}
  </Flex>
);

export default Tags;
