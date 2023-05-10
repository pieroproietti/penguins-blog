---
authors: pieroproietti
slug: add-giscus-docusaurus
title: add giscus a docusaurus
lang: it
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

Questo articolo è una libera traduzione di [how to add giscus comments to docusaurus](https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h).

Al momento la pagina è ancora in lavorazione, sarà da considerarsi finita quando funzioneranno i commenti.

## Scopo
Questo post è una descrizione passo per passo di come aggiungere [Giscus](https://giscus.app/), un sistema di commenti alimentato da GitHub Discussion, ad un sito statico generato con Docusaurus.

## Setup Giscus
Seguite i prossimi passi per configurare Giscus e collegarlo alle discussioni di GitHub.

## Abilitare GitHub discussion
Create una repository Github nel vostro account dove i commenti possano essere memorizzati nella sessione Discussion.

Nella pagina principale della repository creata andate su Settings.
Sotto la sezione "Features", cliccate su "Set up discussions".

Modificate il template in "Start a new discussion" e cliccate su "Start discussion".

## Abilitate Giscus
Configurate Giscus nel vostro account GitHub.

Nella sezione "Repository access" aggiungete solo il repository creato nel passo precedente per essere accessibile a giscus e fare clic su "Save"

## Get repository API key
Accedere con l'account GitHub in GraphQL API Explorer.

Utilizzare la seguente query per ottenere l'id del repository creato, le categorie di discussione con i relativi dettagli (ad esempio, id e nome). 
**Nota** Sostituire proprietario e nome con il nome del proprio account GitHub e il nome del repository creato.

```
query { 
  repository(owner: "pieroproietti", name:"penguins-blog"){
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
      "id": "R_kgDOJOjGXA",
      "discussionCategories": {
        "edges": [
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2L",
              "name": "Announcements"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2M",
              "name": "General"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2O",
              "name": "Ideas"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2Q",
              "name": "Polls"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2N",
              "name": "Q&A"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOJOjGXM4CWX2P",
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

* Installate il pacchetto @giscus/react:
```
pnpm i @giscus/react
```

* Creiamo il componente Giscus, ad esempio sotto `/src/components/GiscusComponent` come di seguito:

```typescript
import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="pieroproietti/penguins-blog"
      repoId="R_kgDOJOjGXA"
      category="General"
      categoryId="DIC_kwDOJOjGXM4CWX2M"    // E.g. id of "General"
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
## Creazione del componente `BlogPostItem`
* creazione del componente `BlogPostItem` per impacchettare i post del blog con il sistema di commenti di Giscus:

```
pnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
```

Questo creerà un componente `BlogPostItem` sotto `src/theme`. 
Modificate `index.js` come di seguito:

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
**Nota** l'Hook `useBlogPost()` viene utilizzato nel componente `BlogPostItem` per rendere configurabile l'attivazione dei commenti per post del blog. Il valore chiave `enableComments: true` deve essere aggiunto al file `.md` del post del blog per attivare i commenti. Ad esempio:

```
---
title: "Title of blog post"
authors: author
tags: [keywordOne, keywordTwo]
enableComments: true # for Gisqus
---
```
A fine lavoro, sarà attivata la funzione di commento del post corrente su questa pagina, che potrà essere utilizzata come dimostrazione. Sentitevi liberi di premere il pulsante "Mi piace" se avete trovato utile questo post, o di postare la vostra domanda nei commenti se ne avete una.
