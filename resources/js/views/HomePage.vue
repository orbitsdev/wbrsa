<template>

  <div>
    <screen-loading-component v-if="isScreenLoading"></screen-loading-component>

    <div v-else>
      Home Page
        USer  : {{ user }}
        token {{ auth_token }}
        ROles {{ roles }}
        <base-spinner v-if="isLogoutLoading"></base-spinner>
      <base-button @click="logout" v-else> Logout</base-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import BaseButton from '../components/BaseButton.vue'
import ScreenLoadingComponent from '../components/ScreenLoadingComponent.vue';
 
import { mapGetters } from 'vuex';
export default {
  components: { BaseButton, ScreenLoadingComponent },
    
  data() {
    return {
      currentUser: {},
      token: localStorage.getItem('token'),
      isLogoutLoading: false,
      isScreenLoading: false
    }
  },
 
  computed: {
    ...mapGetters(['user', 'auth_token', 'roles'])
  },


mounted () {
  window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
  this.getCurrentUser();
},
  methods: {


    async logout() {

      this.isLogoutLoading = true;
      await axios.post('/api/logout').then((response)=>{
          console.log(response);
          localStorage.removeItem('token');
          this.$router.push('/login');
      }).catch(e=>{
        console.log(error);
      }).finally(()=>{
        
        this.isLogoutLoading = true;
      });

      

    
    },

    getCurrentUser(){
        this.isScreenLoading = true;
          axios.get('/api/user').then(response=>{
            const userData = {
                user: response.data,
                token: this.token
            }
            
           this.$store.dispatch('setUser', userData);
          // this.currentUser = response.data;
          // console.log(response.data);
        }).catch(e=>{
          this.$swal(e);
        }).finally(()=>{
          this.isScreenLoading = false;
        });
    }


  },
  }
</script>

<style lang="scss" scoped>

</style>