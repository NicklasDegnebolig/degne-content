---
title: Title of the page
description: meta description of the page
---

# Welcome

::fancy-header
#header
Here is my title

#description
This is an **awesome card** by _Nicklas Degnebolig_.

- It supports markdown.
- You can add lists.
- You can add **bold** and _italic_ text.
- Even [links](https://example.com) work!

> This is a blockquote.

```js [file.js]
export default () => {
  console.log('Code block')
}
```

#footer
written by Nicklas Degnebolig.
::

This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory.

Try to navigate to [/about](/about). These 2 pages are rendered by the `pages/[...slug].vue` component.

---

Look at the [Content documentation](https://content.nuxtjs.org/) to learn more.
