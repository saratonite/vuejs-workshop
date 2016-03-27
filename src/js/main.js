console.log("hola");

var Vue = require("vue");

var VueRouter = require('vue-router')

Vue.use(VueRouter);


require('../css/style.css');

// Vue Router


var router = new VueRouter({"hashbang":false});

router.map({
  '/':{
    component:require("./views/home")
  },
  '/about':{
    component:require("./views/about")
  },
  "/contact":{
    component:require("./views/contact")
  },
  "/*":{
    component:require("./views/404")
  }
});


var App = Vue.extend({
  components:{
    mainnav:require("./components/main-nav")
  }

});


router.start(App,"body");
