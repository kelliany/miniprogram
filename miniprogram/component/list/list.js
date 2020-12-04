// component/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {
        name:'coding',
        checked:0
      },
      {
        name:'test',
        checked:1
      }
  ]},

  /**
   * 组件的方法列表
   */
  methods: {
    inputContent(event) {
      let val = event.detail.value;
      this.data.list.push({
        name: val,
        checked:0
      })
      this.setData({
        list:this.data.list
      })
      
    }
  }
})
