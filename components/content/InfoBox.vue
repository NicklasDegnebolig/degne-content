<template>
    <div class="infobox">
      <h3> 
        <ContentSlot name="title"></ContentSlot>
    </h3>
      <ContentSlot name="description"></ContentSlot>
    </div>
  </template>

  
  <style scoped>
  .infobox {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    background-color: #f9f9f9;
    margin: 16px 0;
  }
  h3 {
    margin-top: 0;
  }
  </style>