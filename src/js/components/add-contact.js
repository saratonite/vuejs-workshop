module.exports = {
  template:`
      <p>Name:<input type="text" v-model="name" placeholder="{{placeholder}}" />
      <button>Add</button>
      <button @click="clear()">Clear</button>
      </p>
  `,
  data:function(){

    return {
      name:"",
      placeholder:"Enter name..."
    }

  },
  methods:{
    clear:function(){
      this.name = "";
    }
  }
}
