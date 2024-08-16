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
    
    border-radius: 1.5rem;
    padding: 1rem;
    background-color: var(--interactive-color);
     }
  h3 {
    margin-top: 0;
  }
  </style>