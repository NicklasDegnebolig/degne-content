<template>
    <div class="table-of-contents flow">
      <h2>
        <ContentSlot name="title"></ContentSlot>
      </h2>
      <ul>
        <slot></slot>
      </ul>
    </div>
  </template>
  

  <style scoped>
  .table-of-contents {
    border-radius: 1.5rem;
    padding: 1rem;
    background-color: var(--interactive-color);
  }

  .table-of-contents ul {
    list-style-type: none;
    padding-left: 0;
  }

  .table-of-contents a:hover {
    text-decoration: underline;
  }
  </style>