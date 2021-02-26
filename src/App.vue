<script>
import players from './example-data/players.json'

export default {
  name: 'App',
  data() {
    return {
      tableColumns: [
        { name: 'name', label: 'NAME', sortable: true, sticky: true, align: 'left', minWidth: 200 },
        { name: 'team', label: 'TEAM', sortable: true },
        { name: 'pos', label: 'POS', sortable: true },
        { name: 'ADP', label: 'ADP', sortable: true, maxWidth: 100 },
        { name: 'R', label: 'R', sortable: true },
        { name: 'HR', label: 'HR', sortable: true },
        { name: 'RBI', label: 'RBI', sortable: true },
        { name: 'SB', label: 'SB', sortable: true },
        { name: 'OBP', label: 'OBP', sortable: true },
        { name: 'IP', label: 'IP', sortable: true },
        { name: 'K', label: 'K', sortable: true },
        { name: 'SVHD', label: 'SVHD', sortable: true },
        { name: 'ERA', label: 'ERA', sortable: true },
        { name: 'WHIP', label: 'WHIP', sticky: true, sortable: true },
      ],
      tableData: players
    }
  },
  methods: {
    handleClickEvent() {
      console.log('clicked')
    }
  }
}
</script>

<template>
  <main id="toolbox-app">
    <hgroup>
      <h1>Toolbox</h1>
      <h4>A personal component &amp; utility library.</h4>
    </hgroup>
    <section>
      <h2>Components:</h2>
      <ToolboxCard>
        <h3>Icon</h3>
        <div style="display:flex; justify-content: space-around; flex-wrap: wrap;">
          <!--
          <ToolboxIcon name="arrow-right" />
          <ToolboxIcon name="arrow-left" />
          <ToolboxIcon name="share" />
          <ToolboxIcon name="calendar" />
          <ToolboxIcon name="times" />
          -->
          <icon-uil-arrow-left class="icon" />
          <icon-uil-arrow-right class="icon" />
          <icon-uil-share class="icon" />
          <icon-uil-calender class="icon" />
          <icon-uil-times class="icon" />
        </div>
      </ToolboxCard>

      <ToolboxCard>
        <h3>Link</h3>
        <ToolboxLink href="/" target="_blank">test link</ToolboxLink>
      </ToolboxCard>

      <ToolboxCard>
        <h3>Button</h3>
        <ToolboxButton @click="handleClickEvent">Primary Button</ToolboxButton>
        <ToolboxButton disabled>Disabled Button</ToolboxButton>
        <ToolboxButton variant="secondary">Secondary Button</ToolboxButton>
        <ToolboxButton variant="ghost">
          Ghost Button
          <icon-uil-share class="icon" />
          <!-- <ToolboxIcon name="share" /> -->
        </ToolboxButton>
        <ToolboxButton size="small">Small Button</ToolboxButton>
        <ToolboxButton size="large">Large Button</ToolboxButton>
      </ToolboxCard>

      <ToolboxCard>
        <h3>Radio Button</h3>
        <ToolboxRadio name="radio-test" value="on" label="On" />
        <ToolboxRadio name="radio-test" value="off" label="Off" />
        <ToolboxRadio name="radio-test" value="off" label="I'd rather not say" />
      </ToolboxCard>

      <ToolboxCard>
        <h3>Checkbox</h3>
        <ToolboxCheckbox name="checkbox-test" label="Would you like to subscribe to my bullshit?" />
      </ToolboxCard>
      
      <ToolboxCard>
        <h3>Toggles</h3>
        <ToolboxToggle mode="checkbox" label="Toggle Checkbox" />
        <br />
        <ToolboxToggle mode="group" group-label="Toggle Group" :labels="['On', 'Off', 'Other']" />
        <br />
        <ToolboxToggle mode="button" :labels="['Toggle Button']"/>
        <br />
        <ToolboxToggle mode="button" :labels="['On', 'Off']" />
        <br />
        <!--
        <p>toggle button (multiple icons, one label):</p>
        <ToolboxToggle mode="button" :icons="['play', 'pause']" :labels="['Play']" />
        <br />
        -->
        <ToolboxToggle mode="switch" switchLabel="Lights:" />
      </ToolboxCard>

      <ToolboxCard>
        <h3>Data Table</h3>
        <ToolboxTable
          :columns="tableColumns"
          :data="tableData"
          bordered
          numberedLabel="Rk"
          emptyCellContent=" "
          stickyHeader
        />
      </ToolboxCard>
    </section>
  </main>
</template>

<style>
/* theme example */
#toolbox-app  {
  --card-bg: var(--cool-white);
}

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

#toolbox-app .tb-card + .tb-card {
  margin-top: 3rem;
}

.tb-card h3 {
  padding: .5rem 1rem;
  margin: -1rem;
  margin-bottom: 1rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px; 
  border-bottom: 1px solid var(--neutral-dark);
  background: var(--white);
}

.tb-button {
  margin-bottom: .5rem;
}

.tb-table {
  /* max-height: 300px; */
}
</style>