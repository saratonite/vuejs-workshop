console.log("hola");

var Vue = require("vue");

var VueRouter = require('vue-router')

Vue.use(VueRouter);


require('../css/style.css');


//console.log(navComponent);

new Vue({
  el:"body",
  data:{
    msg:"Hello World",
    contacts:[
      "Dr.Sheldon Cooper",
      "Leonard",
      "Howard"
    ]
  },
  ready:function(){
      //alert("Hola");
  },
  components:{
    mynav:require("./components/main-nav"),
    contact:require("./components/contact.component.js"),
    addcontact:require("./components/add-contact.js")
  }
})
