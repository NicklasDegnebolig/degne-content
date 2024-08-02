<template>
    <div class="card">
      <div class="card-header">
        <ContentSlot name="header"></ContentSlot>
      </div>
      <div class="card-content">
        <ContentSlot name="description"></ContentSlot>
      </div>
      <div class="card-footer">
        <ContentSlot name="footer"></ContentSlot>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .card-header {
    font-size: 1.5em;
    font-weight: 700;
    color: gold;
    margin-bottom: 8px;
  }
  
  .card-content {
    margin-bottom: 8px;
  }
  
  .card-footer {
    font-size: 0.9em;
    color: #666;
    text-align: right;
  }
  </style>