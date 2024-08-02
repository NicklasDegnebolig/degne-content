<template>
    <div class="table-of-contents">
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
    margin: 16px 0;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .table-of-contents h2 {
    margin-top: 0;
  }
  .table-of-contents ul {
    list-style-type: none;
    padding-left: 0;
  }
  .table-of-contents li {
    margin: 8px 0;
  }
  .table-of-contents a {
    text-decoration: none;
    color: #007bff;
  }
  .table-of-contents a:hover {
    text-decoration: underline;
  }
  </style>