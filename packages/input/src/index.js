Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    label: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入'
    },
    type: {
      type: String,
      value: 'text'
    },
    maxlength: {
      type: [String, Number],
      value: -1
    },
    name: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false
    },
    showClear: {
      type: Boolean,
      value: false
    },
    clsName: {
      type: String,
      value: ''
    },
    wrapCls: {
      type: String,
      value: ''
    },
    require: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBindInput(e) {
      this.setInputVal(e, e.detail.value)
    },

    onFocus(e) {
      this.setData({showClear: true})
      this.triggerEvent('inputfocus', e.detail)
    },

    onBlur(e) {
      setTimeout(() => {
        this.setData({showClear: false})
      }, 300)
      this.triggerEvent('inputblur', e.detail)
    },

    onConfirm(e) {
      this.triggerEvent('inputconfirm', e.detail)
    },

    setInputVal(e, value) {
      this.setData({
        value
      })

      const key = e.currentTarget.dataset.key
      e.detail.key = key
      e.detail.value = value
      this.triggerEvent('inputevent', e.detail)
    },

    onClearSearchIpt(e) {
      this.setInputVal(e, '')
    }
  }
})
