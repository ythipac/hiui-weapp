Component({
  options: {
    addGlobalClass: true
  },

  properties: {
    placeholder: {
      type: String,
      value: '请输入'
    },
    rightText: {
      type: String,
      value: '搜索'
    },
    searchValue: String,
    confirmType: String,
    inputClass: String,
    textClass: String,
    wrapClass: String,
    placeholderStyle: {
      type: String,
      value: ''
    },
    searchFocus: {
      type: Boolean,
      value: false
    },
    searchDisabled: {
      type: Boolean,
      value: false
    }
  },
  ready() {
    const searchValue = this.data.searchValue
    if (searchValue) {
      this.setData({
        value: this.data.searchValue
      })
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
    onSearchHandler(e) {
      this.triggerEvent('onsearch', {e, value: this.data.value})
    },

    onBindInput(e) {
      this.setData({value: e.detail.value})
      this.triggerEvent('onsearchinput', e)
    },
    onBindConfirm(e) {
      this.setData({value: e.detail.value})
      e.value = this.data.value
      this.triggerEvent('onsearchconfirm', e)
    },
    onBindFocus(e) {
      this.triggerEvent('onfocus', e)
    },
    onClearSearchIpt(e) {
      this.setData({value: '', searchValue: ''})
      e.detail.value = ''
      this.triggerEvent('onsearchinput', e)
    }
  }
})
