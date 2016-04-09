module.exports =  {
  template:require("./tpl/main-nav.html"),
  ready:function(){
    //alert("cool");
    console.log(this.$route);
    console.log(this.$route.path);
  }
}
