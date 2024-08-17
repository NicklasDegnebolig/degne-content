<template>
    <div class="quote">
      <blockquote> 
         <ContentSlot name="quote" /> 
      </blockquote>
      <cite>
         <ContentSlot name="author" /> 
      </cite>
    </div>
  </template>
  
  
  <style>

  blockquote {
    border-inline-start-width: 0;
    max-inline-size: var(--size--content-3);
  }
  blockquote p {
    font-size:3rem;
    font-style: italic;
    text-align: center;
    font-weight: 100;
  }
  cite {
    display: block;
    text-align: right;
    border-inline-start-width:0px;
    color: var(--secondary-text-color);
    text-align: center;
    max-inline-size: var(--size--content-3);
  }
  </style>