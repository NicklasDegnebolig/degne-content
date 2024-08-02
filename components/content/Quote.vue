<template>
    <div class="quote">
      <blockquote> 
         <ContentSlot name="quote"></ContentSlot>  
      </blockquote>
      <cite>
         <ContentSlot name="author"></ContentSlot> 
      </cite>
    </div>
  </template>
  
  
  <style scoped>
  .quote {
    border-left: 4px solid #ccc;
    padding-left: 16px;
    margin: 16px 0;
    font-style: italic;
  }
  cite {
    display: block;
    text-align: right;
    margin-top: 8px;
    font-size: 0.9em;
    color: #666;
  }
  </style>