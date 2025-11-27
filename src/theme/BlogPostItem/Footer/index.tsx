import React, { type ReactNode } from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import GiscusComponent from '@site/src/components/Giscus';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const location = useLocation();
  const isBlogHomePage = location.pathname === '/ltmdb-docs/blog';

  return (
    <>
      <Footer {...props} />
      {!isBlogHomePage && <GiscusComponent />}
    </>
  );
}
