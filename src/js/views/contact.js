var notifier = require("../libs/notifier/notifier");



module.exports = {
  template:require("./tpl/contact.html"),
  data:function(){
    return {
      contact:{
        name:"",
        email:"sarath@moovooz.com",
        phone:"",
        message:"",
        request:false
      }
    }
  },
  methods:{
    submit:function(){

      this.contact.request = true;
      self = this;

      setTimeout(function(){
        notifier.show('Default!' , 'I am a default notification.', '', 'img/ok-48.png', 4000);
        self.contact.request = false;
      },3000);
    },
    reset:function(){
      this.contact = {
        name:"",
        email:"",
        phone:"",
        message:""
      }
    }
  }
}
