import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter

  console.log('BlogPostItemWrapper unconditional log:', {
    isBlogPostPage,
    metadata,
    props
  });

  if (isBlogPostPage) {
    console.log('BlogPostItemWrapper debug:', {
      title,
      enableComments,
      isBlogPostPage,
      frontMatter,
      repoId: "R_kgDOJOjGXA",
      categoryId: "DIC_kwDOJOjGXM4CWX2M"
    });
  }

  return (
    <>
      <BlogPostItem {...props} />
      <div style={{ border: '2px solid red', padding: '10px', margin: '20px 0' }}>
        <strong>DEBUG INFO (Forced):</strong><br />
        enableComments: {String(enableComments)}<br />
        isBlogPostPage: {String(isBlogPostPage)}<br />
        slug: {slug}
      </div>
      {(enableComments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}
