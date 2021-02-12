<script>
/**
 * BfScrollEffect: A wrapper component to add scroll effects to its content.
 */
export default {
  props: {
    // We can also support multiple scroll effects. Currently supports "fade" and "shadow"
    effect: {
      type: String,
      default: 'fade',
      validator: val => ['fade', 'shadow'].includes(val)
    }
  },
  data() {
    return {
      width: undefined,
      height: undefined,
      effectLocation: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    }
  },

  mounted() {
    // Setup ResizeObservers to watch for changes in the scroll container and the wrapper
    // The ResizeObserver is available in all modern browsers, but lets check to be sure.
    if (typeof ResizeObserver !== 'undefined') {
      // Observe the scroll container to determine if a scroll effect is necessary after the element is resized.
      const scrollObserver = new ResizeObserver(this.toggleScrollEffects)
      scrollObserver.observe(this.$refs.scrollContainer)
      this.$once('hook:destroyed', () => scrollObserver.disconnect()) // Cleanup when the component is destroyed.

      // Recalculate the container dimensions when the wrapper is resized.
      const wrapObserver = new ResizeObserver(this.calcDimensions)
      wrapObserver.observe(this.$el)
      this.$once('hook:destroyed', () => wrapObserver.disconnect())
    }
  },
  methods: {
    /**
     * Calculate the dimensions of the parent container
     */
    async calcDimensions() {
      // Reset dimensions for correctly recalculating parent dimensions.
      this.width = undefined
      this.height = undefined
      await this.$nextTick()

      this.width = `${this.$el.clientWidth}px`
      this.height = `${this.$el.clientHeight}px`
    },

    /**
     *  Determine if scroll effects need to be added and activate them as needed.
     */
    toggleScrollEffects() {
      // get a reference to the scroll container
      const scrollContainer = this.$refs.scrollContainer

      // are scrollbars visible?
      const hasHorizontalScrollbar = scrollContainer.clientWidth < scrollContainer.scrollWidth
      const hasVerticalScrollbar = scrollContainer.clientHeight < scrollContainer.scrollHeight

      // has the area been scrolled at all? store the scroll location on each axis.
      const scrolledFromLeft = scrollContainer.offsetWidth + scrollContainer.scrollLeft
      const scrolledFromTop = scrollContainer.offsetHeight + scrollContainer.scrollTop

      // has it been scrolled all the way?
      const scrolledToTop = scrollContainer.scrollTop === 0
      const scrolledToRight = scrolledFromLeft >= scrollContainer.scrollWidth
      const scrolledToBottom = scrolledFromTop >= scrollContainer.scrollHeight
      const scrolledToLeft = scrollContainer.scrollLeft === 0

      // show the top effect if the vertical scrollbar is active and
      // the user is not currently scrolled to the top of the area
      this.effectLocation.top = hasVerticalScrollbar && !scrolledToTop

      // show the right effect if the horizontal scrollbar is active and
      // the user is not currently scrolled all the way to the right of the scrollable area
      this.effectLocation.right = hasHorizontalScrollbar && !scrolledToRight

      // show the bottom effect if the vertical scrollbar is active and
      // the user is not currently scrolled all the way to the bottom of the scrollable area
      this.effectLocation.bottom = hasVerticalScrollbar && !scrolledToBottom

      // show the left effect if the vertical scrollbar is active and
      // the user is not currently scrolled all the way to the left of the scrollable area
      this.effectLocation.left = hasHorizontalScrollbar && !scrolledToLeft
    }
  }
}
</script>

<template>
  <div class="scroll-wrap" tabindex="0">
    <div
      ref="scrollContainer"
      :class="['scroll-container', effect]"
      :style="{ width, height }"
      @scroll.passive="toggleScrollEffects"
    >
      <slot />
      <span :class="['scroll-effect', 'top', { 'active' : effectLocation.top }]" />
      <span :class="['scroll-effect', 'right', { 'active' : effectLocation.right }]" />
      <span :class="['scroll-effect', 'bottom', { 'active' : effectLocation.bottom }]" />
      <span :class="['scroll-effect', 'left', { 'active' : effectLocation.left }]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrap {
  position: relative;
  overflow: hidden;
  flex: 1;
}

.scroll-container {
  overflow: auto;
  background: $white-matter;
}

.scroll-effect {
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;

  &.top,
  &.bottom {
    left: 0;
    width: calc(100% - 1rem); // account for the scrollbar
    height: 2rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-image: radial-gradient(farthest-side at 25% 0, rgba($white-matter, 1), rgba($white-matter, .4) 100%);
    background-size: calc(125% - 3rem);
    background-position: top;
    background-repeat: no-repeat;
  }

  &.left,
  &.right {
    top: 0; bottom: 0;
    width: 2rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-image: linear-gradient(-90deg, rgba($white-matter, 0) -15.62%, $white-matter 100%);
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
    transform: scaleY(-1); // flip it
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
    transform: scaleX(-1); // flip it
  }

  &.active {
    opacity: 1;
  }
}

.shadow {
  .scroll-effect {
    background-repeat: no-repeat;
  }

  .top,
  .bottom {
    background-image: radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    background-size: 100% 1rem;
  }

  .right,
  .left {
    background-image: radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
    background-size: 1rem 100%;
  }
}

.effect-container {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
}

// Additional overrides when working with tables.
.scroll-wrap {
  .bf-table {
    overflow: visible;
    border: none;
  }

  .bf-table + .top,
  .el-table + .top {
    top: 3rem; // Assumes table headers are on one line.
  }

  // Account for table header bg color in the fade effect
  .bf-table ~ .left,
  .bf-table ~ .right {
    background-image: 
      linear-gradient(-90deg, rgba($axon, 0) -15.62%, $axon 100%),
      linear-gradient(-90deg, rgba($white-matter, 0) -15.62%, $white-matter 100%);
    background-size: 
      1rem 3rem, 
      1rem 100%;
    background-repeat: no-repeat;
  }

  .bf-table.is-chrome + .top {
    top: calc(3rem - 1px); // 1px offset for Chrome sticky issue.
  }
}
</style>
