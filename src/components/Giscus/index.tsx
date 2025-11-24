import React, { ReactNode } from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent(): ReactNode {
  const { colorMode } = useColorMode();
  return (
    <Giscus
      repo="Marsian/ltmdb-giscus" // Replace with your repo
      repoId="R_kgDOQb5obQ" // Replace with your repo ID
      category="General" // Replace with your discussion category
      categoryId="DIC_kwDOQb5obc4CyqYA" // Replace with your category ID
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}
