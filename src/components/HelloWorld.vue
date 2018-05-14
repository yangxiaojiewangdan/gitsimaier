<template>
  <div class="hello">
   <Header></Header>
   <Nav></Nav>
   <Anchors></Anchors>
   <Content></Content>
   <List></List>
   <FooterBox></FooterBox>
  </div>
</template>

<script>
import Header from '../components/Header'
import Nav from '../components/Nav'
import Content from '../components/Content'
import Anchors from '../components/Anchors'
import FooterBox from '../components/Footerr'
import List from '../components/List'
export default {
  name: 'HelloWorld',
  components:{
  	Header,
  	Nav,
  	Content,
    Anchors,
  	List,
  	FooterBox
  },
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>

</style>
