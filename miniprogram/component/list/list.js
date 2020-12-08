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
    getInputContent(event) {
      let val = event.detail.value;
      
      this.setData({
       input:val
      })
      
    },
    submitInput(event) {
      this.data.list.push({
        name:this.data.input,
        checked:0
      })
      this.setData({
        list:this.data.list,
        inputContent:''
      })
    }
  }
})
