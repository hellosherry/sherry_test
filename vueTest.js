/**
 * Created by Administrator on 2016/5/12.
 */
var vm = new Vue({
  el: 'body',
  data: {
    selection: '',
    testData: '',
    list: [ { name: "sherry", sex: "female", age: "15", hobby: "swimming" },
      { name: "helen", sex: "female", age: "23", hobby: "running" },
      { name: "frank", sex: "male", age: "30", hobby: "badminton" },
      { name: "David", sex: "male", age: "15", hobby: "football" } ],
    checkboxList: [ { name: "sherry", value: "female" },
      { name: "helen", value: "female" },
      { name: "frank", value: "male" },
      { name: "David", value: "male" } ],
    options: [ { id: '1', value: 'A' }, { id: '2', value: 'B' }, { id: '3', value: 'C' } ],
    helloworld: 0,
    checkNames: [],
    abc: '2',
    message: 'helloworld',
    raw_html: "<input type='text' v-model='number'>",
    toggle: "abc",
    a: "abc",
    b: "efg",
    rest: true,
    abcde: { number: 123, age: 235 },
    dropName: '',
    items: {
      1: 'a',
      2: 'b',
      3: 'c'
    },
    isA:true,
    isB:false
  },
  ready: function () {
    var me = this;
    var myComponent = Vue.extend({
      template: '<div>A custom component!</div>' + '<input type="text"/>'
    })
    Vue.component('my-component', myComponent);
    new Vue({
      el: '#example2'
    });
  },
  methods: {
    show: function () {
      var me = this;
      me.helloworld = 1;
      me.rest = false;
    },
    show1: function () {
      var me = this;
    },
    selectDrop: function (e) {
      var me = this;
      me.dropName = $(e.target).text();
    },
    changeLocation: function (index) {
      var me = this;
      var exchangeItem = me.list[ index - 1 ];
      me.list.$set(index - 1, me.list[ index ]);
      me.list.$set(index, exchangeItem);
    },
    allChecked: function () {
      var me = this;
      //var isChecked = $("input:checkbox").last().is(":checked");
      $(".checkBoxs input").prop("checked", isChecked);
    },
    change: function (e) {
      $(e.target).addClass('active').siblings('p').removeClass('active');
    },
    test: function () {
      var me = this;
      me.selection = 2;
    },
    saveBook:function (){
      var me = this;
      if(me.isA){
        me.isA = false;
        me.isB = true;
      }
      else{
        me.isA = true;
        me.isB = false;
      }
    }
  }
});
//// 当选中时
//vm.toggle === vm.a
//// 当没有选中时
//vm.toggle === vm.b