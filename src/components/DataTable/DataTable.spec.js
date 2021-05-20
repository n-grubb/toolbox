import { shallowMount } from '@vue/test-utils'
import DataTable from './DataTable'

const tableColumns = [
  { name: 'participant', label: 'Participant', sortable: true },
  { name: 'count', label: 'Count', sortable: true }
]
const tableData = [
  { participant: 'John', count: 2 },
  { participant: 'Ben', count: 3 },
  { participant: 'Sally', count: 1 }
]

describe('DataTable', () => {
  const wrapper = shallowMount(DataTable, {
    propsData: {
      columns: tableColumns,
      data: tableData
    }
  })

  // Setup references to column headers
  const tableHeaders = wrapper.findAll('th')
  const columnHeader1 = tableHeaders.wrappers[0] // tests alphabetical data
  const columnHeader2 = tableHeaders.wrappers[1] // tests numerical data

  it('renders a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('When clicking a column header (first time), sorts a column in ascending order', async () => {
    // Test alphabetical sort.
    await columnHeader1.trigger('click')
    expect(wrapper.find('tbody tr td').text()).toBe('Ben')

    // Test numerical sort.
    await columnHeader2.trigger('click')
    expect(wrapper.findAll('tbody tr td').at(1).text()).toBe('1')
  })

  it('When clicking a column header a second time, sorts a column in descending order', async () => {
    // reset sorting criteria
    resetSort()

    // Test alphabetical sort.
    await columnHeader1.trigger('click')
    await columnHeader1.trigger('click')
    expect(wrapper.find('tbody tr td').text()).toBe('Sally')

    // Test numerical sort.
    await columnHeader2.trigger('click')
    await columnHeader2.trigger('click')
    expect(wrapper.findAll('tbody tr td').at(1).text()).toBe('3')
  })

  it('When clicking a column header a third time, resets the data to unsorted', async () => {
    // reset sorting criteria
    resetSort()

    // Test alphabetical sort.
    await columnHeader1.trigger('click')
    await columnHeader1.trigger('click')
    await columnHeader1.trigger('click')
    expect(wrapper.find('tbody tr td').text()).toBe('John')

    // Test numerical sort.
    await columnHeader2.trigger('click')
    await columnHeader2.trigger('click')
    await columnHeader2.trigger('click')
    expect(wrapper.findAll('tbody tr td').at(1).text()).toBe('2')
  })

  function resetSort() {
    wrapper.setData({
      sortedBy: null,
      sortDirection: null
    })
  }
})
