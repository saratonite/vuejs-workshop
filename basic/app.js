"use strict";

var help = new Vue({

  template:"<p>Helps</p>"

});

var hello = Vue.component('hello',{
  template:"<div class='hello'><p  @click='show'> Hello {{name}} </p> <counter></counter></div>",
  data:function(){
    return {
      name:"World"
    }
  },
  methods:{
    show:function(){
      alert(this.name);
    }
  }
});

Vue.component('counter',{
  template:"<div><button @click='minus'>-</button> {{count}} <button @click='add'>+</button></div>",
  data:function(){
    return {
      count:0
    }
  },
  methods:{
    add:function(){
      this.count++;
    },
    minus:function(){
      if(! this.count < 1){
        this.count--;
      }
    }
  }
});



new Vue({
  el:'body',
  data:{
    msg:"Hello World"
  },
  methods:{
    show:function(){
      alert(this.msg);
    }
  },
  computed:{
    welcome:function(){


      return "Welcome "+this.msg;
    }
  },
  components:{
    help
  }

});
