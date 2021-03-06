import XEUtils from 'xe-utils'

const contextMenuApi = [
  {
    name: 'disabled',
    desc: '是否禁用右键',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'options',
    desc: '菜单配置',
    type: 'Array<Array>',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'code',
        desc: '菜单键值',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'name',
        desc: '菜单名称',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'prefixIcon',
        desc: '前缀图标 className',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'suffixIcon',
        desc: '后缀图标 className',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'disabled ',
        desc: '是否禁用',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'children ',
        desc: '二级菜单（最多只允许有二级）',
        type: 'Array',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'code',
            desc: '菜单键值',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'name',
            desc: '菜单名称',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'prefixIcon',
            desc: '前缀图标 className',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'disabled ',
            desc: '是否禁用',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      }
    ]
  },
  {
    name: 'visibleMethod',
    desc: '该函数 Function({row, rowIndex, column, columnIndex}) 的返回值用来决定是否允许显示右键菜单',
    type: 'Function',
    enum: '',
    defVal: '',
    list: []
  }
]
const apis = [
  {
    name: 'Props',
    desc: '参数',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'data',
        desc: '显示的数据',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'customs',
        desc: '初始化绑定动态列',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        desc: '表格的高度',
        type: 'Number,String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'max-height',
        desc: '表格的最大高度',
        type: 'Number,String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'resizable',
        desc: '是否允许拖动列宽调整大小',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'stripe',
        desc: '是否带有斑马纹',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'border',
        desc: '是否带有纵向边框',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'size',
        desc: '表格的尺寸',
        type: 'String',
        enum: 'medium,small,mini',
        defVal: '',
        list: []
      },
      {
        name: 'fit',
        desc: '列的宽度是否自撑开',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'loading',
        desc: '表格是否显示加载中',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'show-header',
        desc: '是否显示表头',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-current-row',
        desc: '是否要高亮当前选中行',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-hover-row',
        desc: '鼠标移到行是否要高亮显示',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-class-name',
        desc: '给行附加 className，也可以是函数 Function({seq, row, rowIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cell-class-name',
        desc: '给单元格附加 className，也可以是函数 Function({seq, row, rowIndex, column, columnIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-row-class-name',
        desc: '给表头的行附加 className，也可以是函数 Function({headIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-cell-class-name',
        desc: '给表头的单元格附加 className，也可以是函数 Function({headIndex, column, columnIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-row-class-name',
        desc: '给表尾的行附加 className，也可以是函数 Function({footIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-cell-class-name',
        desc: '给表尾的单元格附加 className，也可以是函数 Function({footIndex, column, columnIndex})',
        type: 'String,Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'show-footer',
        desc: '是否显示表尾合计',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'footer-method',
        desc: '表尾合计的计算方法 Function({columns, data})',
        type: 'Function',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'span-method',
        desc: '合并行或列，该函数 Function({seq, row, rowIndex, column, columnIndex, data}) 返回计算后的值',
        type: 'Object',
        enum: '',
        defVal: '{ rowspan: 1, colspan: 1}',
        list: []
      },
      {
        name: 'show-all-overflow',
        desc: '设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）',
        type: 'Boolean,String',
        enum: 'ellipsis,title,tooltip',
        defVal: '',
        list: []
      },
      {
        name: 'show-header-all-overflow',
        desc: '设置表头所有内容过长时显示为省略号',
        type: 'Boolean,String',
        enum: 'ellipsis,title,tooltip',
        defVal: '',
        list: []
      },
      {
        name: 'row-key',
        desc: '行数据的 Key，对应行渲染中虚拟 DOM 的 key 属性（非特殊情况下不需要使用）',
        type: 'Number,String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'auto-resize',
        desc: '是否自动根据父容器大小调整表格宽度',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'auto-width',
        desc: '是否自动计算列宽（如果关闭了需要手动调用 recalculate 函数）',
        type: 'Boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'select-config',
        desc: '多选配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'key',
            desc: '行数据中的唯一主键',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkProp',
            desc: '绑定选中属性，如果设置了该属性渲染速度可以提升n倍（建议数据量大时使用）',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkAll',
            desc: '默认勾选所有',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checkRowKeys',
            desc: '默认勾选开指定行（需要设置 rowKey | key）',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许勾选的方法，该方法 Function({row, rowIndex}) 的返回值用来决定这一行的 CheckBox 是否可以勾选',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'tooltip-config',
        desc: 'tooltip 配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'theme',
            desc: '列 tooltip 的主题',
            type: 'String',
            enum: 'dark,light',
            defVal: 'dark',
            list: []
          }
        ]
      },
      {
        name: 'expand-config',
        desc: '展开行配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'key',
            desc: '行数据中的唯一主键',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有行',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定行（需要设置 rowKey | key）',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '对于同一级的节点，每次只能展开一个',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            type: 'String',
            enum: 'default（点击按钮触发）,cell（点击单元格触发）,row（点击行触发）',
            defVal: 'default',
            list: []
          }
        ]
      },
      {
        name: 'tree-config',
        desc: '树形结构配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'key',
            desc: '行数据中的唯一主键（需要设置 rowKey 或 key）',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'children',
            desc: '树子节点的属性',
            type: 'String',
            enum: '',
            defVal: 'children',
            list: []
          },
          {
            name: 'indent',
            desc: '树节点的缩进',
            type: 'Number',
            enum: '',
            defVal: '16',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有子孙树节点',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定树节点',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '对于同一级的节点，每次只能展开一个',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            type: 'String',
            enum: 'default（点击按钮触发）,cell（点击单元格触发）,row（点击行触发）',
            defVal: 'default',
            list: []
          }
        ]
      },
      {
        name: 'context-menu',
        desc: '快捷菜单配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'header',
            desc: '表头的快捷菜单',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuApi, true)
          },
          {
            name: 'body',
            desc: '内容的快捷菜单',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuApi, true)
          },
          {
            name: 'footer',
            desc: '表尾的快捷菜单',
            type: 'Object',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuApi, true)
          }
        ]
      },
      {
        name: 'mouse-config',
        desc: '鼠标配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'selected',
            desc: '开启左键选中功能',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checked',
            desc: '开启鼠标移动单元格批量选中功能',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'Keyboard-config',
        desc: '按键配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'isArrow',
            desc: '开启方向键功能',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isTab',
            desc: '开启 Tab 键功能',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isCut',
            desc: '开启复制粘贴功能',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isEdit',
            desc: '开启任意键进入编辑（功能键除外）',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'editMethod',
            desc: '只对 isEdit=true 有效，用于重写选中编辑处理逻辑，该函数 Function({seq, row, rowIndex, column, columnIndex, cell}) 可以返回 false 来阻止默认行为',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'edit-config',
        desc: '可编辑配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'key',
            desc: '行数据中的唯一主键（需要设置 rowKey 或 key）',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式',
            type: 'String',
            enum: 'manual（手动触发方式，只能用于 mode=row）,click（点击触发编辑）,dblclick（双击触发编辑）',
            defVal: 'click',
            list: []
          },
          {
            name: 'mode',
            desc: '编辑模式',
            type: 'String',
            enum: 'cell（单元格编辑模式）,row（行编辑模式）',
            defVal: 'cell',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头编辑图标',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'showStatus',
            desc: '是否显示单元格值的修改状态',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'autoClear',
            desc: '当点击非编辑列之后，是否自动清除单元格的激活状态',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'activeMethod',
            desc: '该方法 Function({row, rowIndex, column, columnIndex}) 决定该单元格是否允许编辑',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'edit-rules',
        desc: '校验规则配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'required',
            desc: '是否必填',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'min',
            desc: '校验值最小长度（如果 type=number 则比较值大小）',
            type: 'Number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'max',
            desc: '校验值最大长度（如果 type=number 则比较值大小）',
            type: 'Number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'type',
            desc: '数据校验的类型',
            type: 'String',
            enum: 'number,string',
            defVal: 'string',
            list: []
          },
          {
            name: 'pattern',
            desc: '正则校验',
            type: 'RegExp',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'validator',
            desc: '自定义校验方法，Function(rule, value, callback, {rules,row,column,rowIndex,columnIndex})',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发校验方式',
            type: 'String',
            enum: 'blur,change',
            defVal: 'change',
            list: []
          }
        ]
      },
      {
        name: 'optimized',
        desc: '优化配置项',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'animat',
            desc: '表格动画效果开关（关闭后视觉效果更快）',
            type: 'Object',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'scrollX',
            desc: '横向 X 滚动渲染配置',
            type: 'Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'gt',
                desc: '指定大于多少范围时自动启动滚动渲染',
                type: 'Number',
                enum: '',
                defVal: '60',
                list: []
              },
              {
                name: 'oSize',
                desc: '超过指定阈值重新渲染',
                type: 'Number',
                enum: '',
                defVal: '6',
                list: []
              },
              {
                name: 'rSize',
                desc: '每次渲染条数',
                type: 'Number',
                enum: '',
                defVal: '16',
                list: []
              },
              {
                name: 'vSize',
                desc: '指定可视区域条数，默认自动计算',
                type: 'Number',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'scrollY',
            desc: '纵向 Y 滚动渲染配置',
            type: 'Object',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'gt',
                desc: '指定大于多少范围时自动启动滚动渲染',
                type: 'Number',
                enum: '',
                defVal: '500',
                list: []
              },
              {
                name: 'oSize',
                desc: '超过指定阈值重新渲染',
                type: 'Number',
                enum: '',
                defVal: '25',
                list: []
              },
              {
                name: 'rSize',
                desc: '每次渲染条数',
                type: 'Number',
                enum: '',
                defVal: '70',
                list: []
              },
              {
                name: 'vSize',
                desc: '指定可视区域条数，默认自动计算',
                type: 'Number',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'rHeight',
                desc: '指定行高，默认自动计算',
                type: 'Number',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Slots',
    desc: '插槽',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'empty',
        desc: '空数据时显示的文本内容',
        type: '',
        enum: '',
        defVal: '暂无数据',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    desc: '事件',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'select-all',
        desc: '只对 type=selection 有效，当手动勾选全选时触发的事件',
        type: '',
        enum: '',
        defVal: '{selection,checked},event',
        list: []
      },
      {
        name: 'select-change',
        desc: '只对 type=selection,radio 有效，当手动勾选时触发的事件',
        type: '',
        enum: '',
        defVal: '{selection,checked,row,column},event',
        list: []
      },
      {
        name: 'cell-click',
        desc: '单元格被点击时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'cell-dblclick',
        desc: '单元格被双击时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'sort-change',
        desc: '当排序条件发生变化时会触发该事件',
        type: '',
        enum: '',
        defVal: '{column,prop,order}',
        list: []
      },
      {
        name: 'filter-change',
        desc: '当筛选条件发生变化时会触发该事件',
        type: '',
        enum: '',
        defVal: '{column,prop,values}',
        list: []
      },
      {
        name: 'toggle-expand-change',
        desc: '当行展开或收起时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex},event',
        list: []
      },
      {
        name: 'toggle-tree-change',
        desc: '当树节点展开或收起时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex},event',
        list: []
      },
      {
        name: 'context-menu-link',
        desc: '当点击快捷菜单后触发',
        type: '',
        enum: '',
        defVal: '{menu,type,row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'edit-closed',
        desc: '单元格编辑状态下被关闭时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'edit-actived',
        desc: '单元格被激活编辑时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'edit-disabled',
        desc: '当点击后单元格如果是禁用状态时会触发该事件',
        type: '',
        enum: '',
        defVal: '{row,rowIndex,column,columnIndex,cell},event',
        list: []
      },
      {
        name: 'valid-error',
        desc: '当数据校验不通过时会触发该事件',
        type: '',
        enum: '',
        defVal: '{rule,row,rowIndex,column,columnIndex,cell}',
        list: []
      },
      {
        name: 'body-scroll',
        desc: '内容滚动时会触发该事件',
        type: '',
        enum: '',
        defVal: '{fixed,scrollTop,scrollLeft},event',
        list: []
      },
      {
        name: 'footer-scroll',
        desc: '表尾滚动时会触发该事件',
        type: '',
        enum: '',
        defVal: '{fixed,scrollLeft},event',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    desc: '方法',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'loadData(datas)',
        desc: '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
        type: 'Promise',
        enum: '',
        defVal: 'datas',
        list: []
      },
      {
        name: 'reloadData(datas)',
        desc: '加载数据并恢复到初始状态（对于表格数据需要重载、局部递增场景下可能会用到）',
        type: 'Promise',
        enum: '',
        defVal: 'datas',
        list: []
      },
      {
        name: 'loadColumn(columns)',
        desc: '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
        type: 'Promise',
        enum: '',
        defVal: 'columns',
        list: []
      },
      {
        name: 'reloadColumn(columns)',
        desc: '加载列配置并恢复到初始状态（对于表格列需要重载、局部递增场景下可能会用到）',
        type: 'Promise',
        enum: '',
        defVal: 'columns',
        list: []
      },
      {
        name: 'insert(records)',
        desc: '往表格插入数据，从第一行新增一行或多行新数据',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records',
        list: []
      },
      {
        name: 'insertAt(records,row)',
        desc: '往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置、null 从第一行插入、-1 从最后插入',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records,row',
        list: []
      },
      {
        name: 'revert(rows,prop)',
        desc: '还原更改，还原指定行 row 或者整个表格的数据',
        type: 'Promise',
        enum: '',
        defVal: 'rows?,prop?',
        list: []
      },
      {
        name: 'remove(rows)',
        desc: '删除指定行数据，指定 row 或 [row, ...] 删除多条数据',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'rows',
        list: []
      },
      {
        name: 'removeSelecteds()',
        desc: '删除已选中的所有行数据',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRecords(rowIndex)',
        desc: '获取表格所有数据，和 data 属性一致行为，也可以指定索引获取数据',
        type: 'Array',
        enum: '',
        defVal: 'rowIndex?',
        list: []
      },
      {
        name: 'getRowIndex(row)',
        desc: '根据 row 获取数据中的索引',
        type: 'Number',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'getColumns(columnIndex)',
        desc: '获取表格所有列，也可以指定索引获取列',
        type: 'Array',
        enum: '',
        defVal: 'columnIndex?',
        list: []
      },
      {
        name: 'getColumnIndex(column)',
        desc: '根据 column 获取列中的索引',
        type: 'Number',
        enum: '',
        defVal: 'column',
        list: []
      },
      {
        name: 'getAllRecords()',
        desc: '获取表格数据集合',
        type: 'Array<{insertRecords, removeRecords, updateRecords}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getInsertRecords()',
        desc: '获取新增数据',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRemoveRecords()',
        desc: '获取已删除数据',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getUpdateRecords()',
        desc: '获取已修改数据',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getSelectRecords()',
        desc: '获取已选中数据',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hasRowChange(row,prop)',
        desc: '检查行或列数据是否发生改变',
        type: 'Boolean',
        enum: '',
        defVal: 'row,prop?',
        list: []
      },
      {
        name: 'setActiveRow(row)',
        desc: '激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
        type: 'Promise',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'setActiveCell(row,prop)',
        desc: '激活单元格编辑',
        type: 'Promise',
        enum: '',
        defVal: 'row,prop',
        list: []
      },
      {
        name: 'setSelectCell(row,prop)',
        desc: '只对 trigger!=manual 有效，选中单元格',
        type: 'Promise',
        enum: '',
        defVal: 'row,prop',
        list: []
      },
      {
        name: 'setRowExpansion(rows,checked)',
        desc: '设置展开行，二个参数设置这一行展开与否',
        type: 'Promise',
        enum: '',
        defVal: 'rows,checked',
        list: []
      },
      {
        name: 'setTreeExpansion(rows,checked)',
        desc: '设置展开树形节点，二个参数设置这一行展开与否',
        type: 'Promise',
        enum: '',
        defVal: 'rows,checked',
        list: []
      },
      {
        name: 'setCurrentRow(rows,checked)',
        desc: '用于单选表格，设置某一行为选中状态，第二个参数为选中与否',
        type: 'Promise',
        enum: '',
        defVal: 'rows,checked',
        list: []
      },
      {
        name: 'setSelection(rows,checked)',
        desc: '用于多选表格，设置行为选中状态，第二个参数为选中与否',
        type: 'Promise',
        enum: '',
        defVal: 'rows,checked',
        list: []
      },
      {
        name: 'setAllSelection(checked)',
        desc: '用于多选表格，设置所有行的选中状态',
        type: 'Promise',
        enum: '',
        defVal: 'checked',
        list: []
      },
      {
        name: 'toggleRowSelection(row)',
        desc: '用于多选表格，切换某一行的选中状态',
        type: 'Promise',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'toggleAllSelection()',
        desc: '用于多选表格，切换所有行的选中状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'toggleRowExpansion(row)',
        desc: '用于可展开表格，切换展开行',
        type: 'Promise',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'toggleTreeExpansion(row)',
        desc: '用于可树形表格，切换展开树形节点',
        type: 'Promise',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'clearCurrentRow()',
        desc: '用于单选表格，清空用户的选择',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearSelection()',
        desc: '用于多选表格，清空用户的选择',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRowExpand()',
        desc: '清空展开行状态，数据会恢复成未展开的状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearTreeExpand()',
        desc: '清空树形节点的展开状态，数据会恢复成未展开的状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearSort()',
        desc: '清空排序条件，数据会恢复成未排序的状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearFilter()',
        desc: '清空筛选条件，数据会恢复成未筛选的状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearChecked()',
        desc: '清除单元格批量选中状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearSelected()',
        desc: '清除单元格选中状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearActived()',
        desc: '清除单元格激活状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCopyed()',
        desc: '清空已复制的内容',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearData()',
        desc: '清空单元格内容',
        type: 'Promise',
        enum: '',
        defVal: 'rows?,prop?',
        list: []
      },
      {
        name: 'clearScroll()',
        desc: '清除滚动相关信息，还原到初始状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearAll()',
        desc: '清除表格所有条件，还原到初始状态',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeFilter()',
        desc: '手动关闭筛选面板',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clostTooltip()',
        desc: '手动关闭 tooltip 提示',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeContextMenu()',
        desc: '手动关闭快捷菜单',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'recalculate()',
        desc: '重新计算并更新列宽',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'refreshColumn()',
        desc: '刷新列配置（对于显示/隐藏列场景下可能会用到）',
        type: 'Promise>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateStatus(scope)',
        desc: '更新单元格状态（只对 showStatus=true 并且使用自定义渲染时，当值发生改变时才需要调用）',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isScrollXLoad()',
        desc: '判断是否启用了横向 X 滚动渲染',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isScrollYLoad()',
        desc: '判断是否启用了纵向 Y 滚动渲染',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'sort(prop,order)',
        desc: '手动对表格进行排序',
        type: 'Promise',
        enum: '',
        defVal: 'prop,order',
        list: []
      },
      {
        name: 'validateRow(row,callback)',
        desc: '对表格某一行进行校验的方法，参数为行数据和一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise',
        type: 'Promise',
        enum: '',
        defVal: 'row,callback?',
        list: []
      },
      {
        name: 'validate(callback)',
        desc: '对整个表格进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：（是否校验成功，最近一列未通过校验的字段）。若不传入回调函数，则会返回一个 promise',
        type: 'Promise',
        enum: '',
        defVal: 'callback?',
        list: []
      },
      {
        name: 'exportCsv(options)',
        desc: '将表格数据导出为 .csv 文件，说明：支持IE9+、Edge、Chrome、Firefox 等常用浏览器。IE11以下可能存在中文乱码问题，部分浏览器需要手动修改后缀名为 .csv',
        type: 'Promise',
        enum: '',
        defVal: 'options',
        list: [
          {
            name: 'filename',
            desc: '文件名',
            type: 'String',
            enum: '',
            defVal: 'table.csv',
            list: []
          },
          {
            name: 'original',
            desc: '是否导出源数据（滚动渲染启用后默认是 true）',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isHeader',
            desc: '是否显示表头',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'download',
            desc: '是否马上下载，如果设置为 false 则通过返回结果为内容的 Promise',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'data',
            desc: '自定义数据',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'columns',
            desc: '自定义列',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'columnFilterMethod',
            desc: '列过滤方法，该函数 Function(column,columnIndex) 的返回值用来决定该列是否导出',
            type: 'Function',
            enum: '',
            defVal: '默认过滤掉 type=index,selection,radio 和 prop 为空的列',
            list: []
          },
          {
            name: 'dataFilterMethod',
            desc: '数据过滤方法，该函数 Function(row,rowIndex) 的返回值用来决定该数据是否导出',
            type: 'Function',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      }
    ]
  }
]

export default apis
