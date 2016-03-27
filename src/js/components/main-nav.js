module.exports =  {
  template:`
  <ul>
  <li><a v-link="{ path: '/' }">Home</a></li>
  <li><a v-link="{ path: '/about' }">About</a></li>
    <li><a v-link="{ path: '/contact' }">Contact</a></li>
  </ul>
  `,
  ready:function(){
    //alert("cool");
    console.log(this.$route);
    console.log(this.$route.path);
  }
}
