<script>
/**
 * BfTable: A table component for rendering simple data tables.
 * The goal is for this table component to eventually replace all instances of ElementUI's table in our application.
 * Influenced by:
 * @see https://inclusive-components.design/data-tables/
 * @see https://bbc.github.io/gel/components/data-tables/
 */
import Caret from '@/components/Caret/Caret'

export default {
  components: { Caret },
  props: {
    /**
     * @typedef Column 
     * @type {object}
     * @property {string} name - a slug used to match data
     * @property {string} label - the label to use as the column header
     * @property {boolean} sortable - is this column sortable?
     * @property {Function} sortMethod - a custom sorting function
     * @property {number} minWidth - minimum column width (in px)
     * @property {number} maxWidth - maximum column width (in px)
     */

    /** 
     * An array of column objects
     * @type {Column[]}
     */
    columns: {
      type: Array,
      required: true
    },
    
    /**
     * An array of table rows, represented as objects.
     * A row object:
     * {
     *    column1: value, // a value mapped to a key that matches a column.name
     *    column2: value,
     *    ...
     * }
     */
    data: {
      type: Array,
      required: true
    },
    /**
     * Accepts a table caption. This will be provided to screen readers only.
     */
    caption: {
      type: String,
      default: ''
    },
    scrollShadows: {
      type: Boolean,
      default: false
    },
    withFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sortedBy: null, // column to sort on
      sortDirection: null,
      tableContentWidth: null, // store the container width (in px)
      tableContentHeight: null // store the container height (in px)
    }
  },
  computed: {
    /**
     * Detect whether the content overflows, making it scrollable.
     */
    isScrollable() {
      return (this.tableContentWidth && this.tableContentWidth < this.$el.offsetWidth) ||
        (this.tableContentHeight && this.tableContentHeight < this.$el.offsetHeight)
    },

    /**
     * To prevent a tab stop with no functionality, we only want to make a table focusable if it can be scrolled.
     * Set the tabIndex if the table is scrollable.
     */
    tabIndex() {
      return this.isScrollable ? 0 : null
    },

    /**
     * Is the table sorted in ascending order?
     * Utility for code simplification.
     */
    isSortedAscending() {
      return this.sortDirection === 'ascending'
    },

    /**
     * Sort the data to populate the rows in the table.
     */
    rows() {
      if (this.sortedBy) {
        const column = this.columns.find(c => c.name === this.sortedBy)
        const sortedData = sort(
          // use custom sorting method if it exists
          column && typeof column.sortMethod === 'function' ? column.sortMethod : ascend(prop(this.sortedBy)),
          this.data
        )
        return this.isSortedAscending
          ? sortedData
          : reverse(sortedData)
      }
      return this.data
    }
  },
  mounted() {
    // Setup ResizeObservers to watch for changes in the table width
    // The ResizeObserver is available in all modern browsers, but we should check to be sure.
    if (typeof ResizeObserver !== 'undefined') {
      // Observe the scroll container to determine if a scroll effect is necessary after the element is resized.
      const scrollObserver = new ResizeObserver(this.updateTableContentDimensions)
      scrollObserver.observe(this.$el)
      this.$once('hook:destroyed', () => scrollObserver.disconnect()) // Cleanup when the component is destroyed.
    }
  },
  methods: {
    /**
     * Sort by the selected column.
     */
    sortBy(column) {
      if (column === this.sortedBy) {
        if (this.isSortedAscending) {
          this.sortDirection = 'descending'
        } else {
          // reset search criteria
          this.sortedBy = null
          this.sortDirection = null
        }
      } else {
        this.sortedBy = column
        this.sortDirection = 'ascending'
      }
    },

    /**
     * Store the table dimensions for scrollable and column width calculations.
     * We can assume that we will only have one resizeObserverEntry object.
     */
    updateTableContentDimensions(resizeObserverEntries) {
      for (const entry of resizeObserverEntries) {
        this.tableContentWidth = entry.contentRect.width
        this.tableContentHeight = entry.contentRect.height
      }
    },

    columnWidth(column) {
      // calculate the columns width if each column's width is standardized and evenly distributed (stored as %)
      const evenDistributionPercent = 1 / this.columns.length
      // calculate the even distribution in pixels, accounting for borders
      const evenDistributionWidth = (this.tableContentWidth - 2) * evenDistributionPercent
      return {
        width: `${evenDistributionWidth}px`,
        minWidth: column.minWidth ? `${column.minWidth}px` : null,
        maxWidth: column.maxWidth ? `${column.maxWidth}px` : null
      }
    }
  }
}
</script>

<template>
  <div
    :class="['bf-table', { 'scroll-shadows': scrollShadows }, { 'is-chrome': isChrome }]"
    :tabindex="tabIndex"
  >
    <table>
      <caption
        v-if="caption || $slots.caption"
        class="visually-hidden"
      >
        <slot name="caption">
          {{ caption }}
        </slot>
        <small v-if="tabIndex">
          <!-- Let screen readers know that this table is scrollable. -->
          (scroll to see more)
        </small>
      </caption>
      <colgroup>
        <col
          v-for="column in columns"
          :key="column.name"
          :width="columnWidth(column) ? columnWidth(column).width : null"
        >
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.name"
            :aria-sort="sortedBy === column.name ? sortDirection : false"
            role="columnheader"
            scope="col"
            @click="sortBy(column.name)"
          >
            <div :style="columnWidth(column)">
              {{ column.label }}
              <button
                v-if="column.sortable"
                class="sort-button"
              >
                <span class="visually-hidden">Sort</span>
                <BfCaret
                  v-if="sortedBy === column.name"
                  :order="sortDirection"
                />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
        >
          <td
            v-for="column in columns"
            :key="column.name"
          >
            <span class="cell">
              {{ row[column.name] }}
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="withFooter || $slots.footer">
        <slot name="footer">
          <!-- No footer specified, display the table headers -->
          <tr>
            <th
              v-for="column in columns"
              :key="column.name"
              scope="col"
            >
              <div :style="columnWidth(column)">
                {{ column.label }}
              </div>
            </th>
          </tr>
        </slot>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss">
.bf-table {
  display: block;
  width: 100%;
  border: 1px solid $axon;
  border-top: none;
  background: $white-matter;
  overflow: auto;

  table {
    min-width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-overflow-scrolling: touch; // enable iOS momentum scrolling
  }

  &.scroll-shadows {    
    // Adds scroll shadows
    // inspired by David Bushell's CSS Responsive Tables: http://dbushell.com/2016/03/04/css-only-responsive-tables/
    // and Lea Verou's Pure CSS scrolling shadows https://lea.verou.me/2012/04/background-attachment-local/
    background:
      radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
      linear-gradient($white-matter, $white-matter); /* default, bottom layer color */
    background-position:
      50% calc(3rem - 1px), // account for chrome 1px bug
      right,
      bottom,
      left,
      top left;
    background-size:
      80% 1rem,
      1rem 80%,
      80% 1rem,
      1rem 80%,
      100%;
    background-repeat: no-repeat;

    /* Define gradients to override the scroll shadows when no scrolling is necessary. */
    // gradient on the first row to hide the top shadow
    tr:first-child {
      background-image: linear-gradient(to bottom, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-position: top;
      background-size: 100% 1.5rem;
      background-repeat: no-repeat;
    }

    // gradient on the last cells to hide the right shadow
    td:last-child {
      background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-position: right;
      background-size: 1.5rem 100%;
      background-repeat: no-repeat;
    }

    // gradient on the bottom row to hide the bottom shadow
    tr:last-child {
      background-image: linear-gradient(to top, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-position: bottom;
      background-size: 100% 1.5rem;
      background-repeat: no-repeat;
    }

    // gradient on the first cells to hide the left shadow
    td:first-child {
      background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
      background-size: 1.5rem 100%;
      background-repeat: no-repeat;
    }
  }

  thead {
    width: 100%;
    position: sticky;
    top: 0;
  }

  &.is-chrome {
    th {
      position: sticky;
      top: -1px; // fixes a position:sticky bug in Chrome
    }
  }

  th,
  td {
    // horizontal padding will cause content to grow larger than the screen,
    // so we make it 0 here and apply it to the children elements.
    border: none;
    font-size: 0.875rem;
    line-height: 1rem;
    text-align: start;
    box-sizing: border-box;
  }

  th {
    padding: 0;
    background-color: $axon;
    font-weight: 700;
    white-space: nowrap;
    vertical-align: bottom;
    user-select: none; // prevent text selection when clicking headers

    > div {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1rem;
    }
  }

  // Only the header is clickable by default
  thead th:hover {
    color: $gaba;
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid $axon;
    white-space: normal;
    vertical-align: top;
  }

  tr:last-of-type td {
    border-bottom: none;
  }

  tfoot {
    border-top: 1px solid $axon;
  }

  .sort-button {
    width: 1rem;
    height: 1rem;
    padding: 0;
    margin-left: .5rem;
    border: none;
    background: $axon;

    // fix caret positioning.
    .caret-icon {
      display: block;
      height: 1rem;
      float: none;

      svg {
        top: -.125rem;
      }
    }
  }
}
</style>
