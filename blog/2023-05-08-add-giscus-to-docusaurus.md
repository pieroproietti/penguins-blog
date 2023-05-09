---
authors: pieroproietti
slug: add-giscus-docusaurus
title: add giscus a docusaurus
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Questo articolo è una libera traduzione di [how to add giscus comments to docusaurus](https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h)

# Aggiungere commenti Giscus a Docusaurus
## Scopo
Questo post è una descrizione passo per passo di come aggiungere Giscur, un sistema di commenti alimentato da GiutHub Discussion, ad un sito statico generato con Docusaurus.

## Setup Giscus
Follow the steps in the sections of the current chapter to set up Giscus and connect it to the GitHub discussions.

## Abilitare GitHub discussion
Create una repository Github nel vostro account dove i commenti possano essere memorizzati nella sessione Discussion.

Nella pagina principale della repository creata andate su Settings.
Sotto la sezione "Features", cliccate su "Set up discussions".

Modificate il template in "Start a new discussion" e cliccate su "Start discussion".

## Abilitate Giscus
Configure giscus in your GitHub account.
In Section "Repository access" add only created repository from previous step to be accessed by giscus and click "Save".
Get repository API key
Login with GitHub account in GraphQL API Explorer.
Use following query to fetch the id of created repository, discussion categories with its details (e.g. id and name). Note! Replace owner and name with your GitHub account name and name of repository you created.

```
query { 
  repository(owner: "nameOfYourGitHubAccount", name:"nameOfCreatedRepository"){
    id
    discussionCategories(first:10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
```

L'oggetto json risultante dovrebbe essere simile a questo:

```
{
  "data": {
    "repository": {
      "id": "R_kgDOIVqhTg",
      "discussionCategories": {
        "edges": [
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSES",
              "name": "Announcements"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSET",
              "name": "General"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSEV",
              "name": "Ideas"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSEX",
              "name": "Polls"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSEU",
              "name": "Q&A"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOIVqhTs4CSSEW",
              "name": "Show and tell"
            }
          }
        ]
      }
    }
  }
}
```

## Create Giscus component

* Install @giscus/react package
```
pnpm i @giscus/react
```

* Create Giscus Component, e.g. under /src/components/GiscusComponent as follows:

```typescript
import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="nameOfYourGitHubAccount/nameOfCreatedRepository"
      repoId="idOfCreatedRepo"
      category="General"
      categoryId="IdOfDiscussionCategory"  // E.g. id of "General"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
```
## Create BlogPostItem component
* Create BlogPostItem component to wrap blog posts with Giscus commenting system as follows:

```
pnpm run swizzle [theme name] [component name] -- --wrap

# Example:
pnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```

This will create a BlogPostItem component under
`src/theme`. Edit `index.js` as follows:

```typescript
import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()
  const isBrowser = useIsBrowser();

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {(enableComments && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}
```
**Note** that the `useBlogPost()` Hook is used in `BlogPostItem` component to make activation of comments per blog post configurable. The key value `enableComments: true` must be added to your blog post md file in order to activate commenting for it. E.g.:

```
---
title: "Title of blog post"
authors: author
tags: [keywordOne, keywordTwo]
enableComments: true # for Gisqus
---
```
I have enabled the comment function of current post in my page, which can be used as a demo. Feel free to hit the "Like" button if you found this post helpful, or post your question in the comment if you have one.

