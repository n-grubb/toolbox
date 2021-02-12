<script>
export default {
  name: 'App'
}
</script>

<template>
  <main id="toolbox-app">
    <hgroup>
      <h1>Toolbox</h1>
      <h4>A personal component, style & utility library.</h4>
    </hgroup>
    <section>
      <h2>Components:</h2>

      <ToolboxCard>
        <h3>Icon</h3>
        <ToolboxIcon name="arrow-right" />
      </ToolboxCard>

      <ToolboxCard>
        <h3>Link</h3>
        <ToolboxLink href="/" target="_blank">test link</ToolboxLink>
      </ToolboxCard>

      <ToolboxCard>
        <h3>Button</h3>
        <ToolboxButton>Primary Button</ToolboxButton>
        <ToolboxButton disabled>Disabled Button</ToolboxButton>
        <ToolboxButton type="secondary">Secondary Button</ToolboxButton>
        <ToolboxButton type="ghost">
          Ghost Button
          <ToolboxIcon name="share" />
        </ToolboxButton>
        <ToolboxButton size="small">Small Button</ToolboxButton>
        <ToolboxButton size="large">Large Button</ToolboxButton>
      </ToolboxCard>

      <ToolboxCard>
        <h3>Radio Button</h3>
        <ToolboxRadio value="off" label="Test Radio Button" />
      </ToolboxCard>
      
      <ToolboxCard>
        <h3>Toggle</h3>
        <ToolboxToggle mode="checkbox" />
        <ToolboxToggle mode="group" />
        <ToolboxToggle mode="button" :labels="['Toggle Button']" />
        <ToolboxToggle mode="button" :labels="['On', 'Off']"/>
        <ToolboxToggle mode="button" :icons="['play', 'pause']" :labels="['Play', 'Pause']"/>
        <ToolboxToggle mode="switch" />
      </ToolboxCard>
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

#toolbox-app h2 {
  margin: 2rem 0 1rem;
}

#toolbox-app .toolbox-card + .toolbox-card {
  margin-top: 3rem;
}

.toolbox-card h3 {
  padding: .5rem 1rem;
  margin: -1rem;
  margin-bottom: 1rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; 
  background-color: black;
  color: white;
}

.toolbox-button {
  margin-bottom: .5rem;
}
</style>