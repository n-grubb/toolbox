<script>
export default {
  name: 'App'
}
</script>

<template>
  <main id="toolbox-app">
    <hgroup>
      <h1>Noah's Frontend Toolbox</h1>
      <h4>A personal component, style & utility library.</h4>
    </hgroup>
    <section>
      <h2>A component/week in 2020:</h2>
      <h3>Components: 3 / Weeks remaining: 48</h3>
      <ul>
        <li>TODO: write readme/blog post explaining project</li>
        <li>TODO: Port all of my components over here.</li>
        <li>TODO: Add Vitepress</li>
        <li>TODO: Add Cypress test examples?</li>
        <li>TODO: Use TypeScript?</li>
        <li>TODO: configure deploy to Netlify</li>
      </ul>
      <p>
        In 2020, my goal is to add atleast one component or utility function per week to this project. 
        I aim to implement my own versions of common components that provide convenient yet minimal style defaults 
        and are built with accessibility concerns in mind. Vue 3 accomplishes a goal of continue Vue learning (we use Vue at Blackfynn).
        I contemplated writing components as web components in vanilla js but the DX is suboptimal. While I would prefer to use a native tech
        and to be framework agnostic, this is a personal tool and I'm likely to always grab Vue as my tool of choice. 
      </p>
      <p>goal: as few dependencies as possible.</p>
    </section>

    <section id="visually-hidden" class="component-showcase">
      <h3>VisuallyHidden:</h3>
      <VisuallyHidden>this is an example of visually hidden text</VisuallyHidden>
    </section>

    <section id="toolbox-icon" class="component-showcase">
      <h3>ToolboxIcon:</h3>
      <ToolboxIcon name="arrow-right" />
      <ToolboxIcon name="arrow-left" />
    </section>
  </main>
</template>

<style>
#toolbox-app {
  padding: 2rem;
  margin-top: 1rem;
  font-family: var(--sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#toolbox-app section:first-of-type {
  margin-top: 2rem;
}

#toolbox-app section:first-of-type {
  margin-top: 2rem;
}

.component-showcase {
  display: grid;
}

.component-showcase h3 {
  margin-top: 2rem;
  grid-row: 1;
  grid-column: 1 / span 3;
}
</style>