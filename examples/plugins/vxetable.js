import Vue from 'vue'
import VXETable from '../../src'
import VXETableElementPlugin from '../../src/plugins/element'
import VXETableIViewPlugin from '../../src/plugins/iview'

Vue.use(VXETable, {
  size: null,
  contextMenu: null,
  optimized: {
    scroll: {
      gt: 500,
      oSize: 20,
      rSize: 100
    }
  }
})

VXETable.setup(VXETableElementPlugin)
VXETable.setup(VXETableIViewPlugin)