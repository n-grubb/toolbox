module.exports = {
  lang: 'en-US',
  title: 'Noah\'s Frontend Toolbox',
  description: 'A personal component, style & utility library.',
  themeConfig: {
    sidebar: {
      '/': getGlobalSidebar()
    }
  }
}

function getGlobalSidebar() {
  return [
    {
      text: 'Notes',
      link: '/notes'
    },
    {
      text: 'Components',
      children: [
        { text: 'ToolboxIcon', link: '/components/toolbox-icon' },
        { text: 'VisuallyHidden', link: '/components/visually-hidden' }
      ]
    }
  ]
}
