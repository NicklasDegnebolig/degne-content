<template>
  <div class="page-wrapper">
    <header>
      <h1>My Nuxt App</h1>
    </header>
    <main class="content-wrapper">
      <NuxtPage />
    </main>
    
  </div>
</template>


<style>
@import 'open-props/normalize';
@import 'open-props/buttons';

:root {

--brand-color:#005328;
--background-color:#292929;
--accesibility-color:#000301;
--tertiary-color:#121212;
--interactive-color:#00B56a;
--primary-text-color:var(--brand-color);
--secondary-text-color:#f8f8f8;


}

html {
  background: var(--background-color);
  padding: 2rem;
  font-family: var(--font-system-ui);
}

.page-wrapper {
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  position: relative;
  padding: 1rem;
 
  background-color: var(--accesibility-color) ;
}

main {
  grid-row: 1;
  grid-column: 1;
  padding: 3rem;
  border-radius: 1.5rem;
  background-color: var(--tertiary-color);
}

header {
  grid-column: 2;
  background-color: var(--tertiary-color);
  padding: 1rem;
  height: 80%;
  border-radius: 1.5rem;
  position: fixed;
  top: 3rem;
}

p {
  max-inline-size: max-content;
}

img, p img {
  display: block;
  margin: 0 auto;
  border-radius: 1.5rem;
  
}

h1,  h2, h3, h4, h5, h6, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: var(--primary-text-color);
}
p, span {
  color: var(--secondary-text-color);
}

.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

a {
  color: var(--primary-text-color);
}
a:hover {
  color: var(--interactive-color);
  text-decoration-color: var(--interactive-color);
}

</style>