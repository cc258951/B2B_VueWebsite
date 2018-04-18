<template>
  <div class="mainbar col-3">
    <ul>
       <template v-for="(data,key,index) in $t('mainbar')">
         <li :class="key">
           <div :class=" active == index ? 'active': activeClass " @click="activeClass(index)" >
             <router-link :to="{ path: key }">{{data}}</router-link>
           </div>
         </li>
       </template>
    </ul>
  </div>
</template>

<script>
  var active = -1;
  import {mapState, mapMutations} from 'vuex'
  import commonMixin from '@/utils/commonMixin'
    export default {
      name: 'mainbar',
      mixins: [commonMixin],
      data(){
        return{
          active : active,
        }
      },
      methods:{
        activeClass: function( index ){
          active = index;
          if(active === index){
            return 'active';
          }else{
            return '';
          }
        }
      }
    }
</script>
