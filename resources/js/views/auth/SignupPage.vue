



<template>

    <section class="body">
        <div class="container">
            <div class="login-box">
                <!-- <div class="row">
                    <div class="col-sm-6">
                        <div class="logo">
                            <span class="logo-font">Go</span>Snippets
                        </div>
                    </div>
                </div> -->
                <div class="row">
                    <div class="col-sm-6">
                        <br>
                            <h3 class="header-title">Sign Up</h3>
                        <form  @submit.prevent="registerUser" class="login-form">
                            <div class="form-group">
                                <label for="first name"> First name </label>
                                <input type="text" :class="[ 'form-control', {'error-border': firstnameError }, ]" placeholder="First Name" v-model="form.first_name" >
                                <div class="error-card" v-if="!!error.first_name" > {{error.first_name[0]  }}</div>
                            </div>
                            <div class="form-group">
                                <label for="first name"> Last name</label>
                                <input type="text" :class="[ 'form-control', {'error-border': lastnameError }, ]" placeholder="Last Name" v-model="form.last_name" >
                                <div class="error-card" v-if="!!error.last_name" > {{error.last_name[0]  }}</div>

                            </div>
                            <div class="form-group">
                                <label for="first name"> Email</label>
                                <input type="text" :class="[ 'form-control', {'error-border': emailError }, ]" placeholder="example@gmail.com" v-model="form.email">
                                <div class="error-card" v-if="!!error.email" > {{error.email[0]  }}</div>

                            </div>
                            <div class="form-group">
                                <label for="first name"> Password</label>
                                <input type="Password" :class="[ 'form-control', {'error-border': passwordError }, ]" placeholder="Password" v-model="form.password">
                                <div class="error-card" v-if="!!error.password" > {{error.password[0] }}</div>

                            </div>
                            <div class="form-group">
                                <label for="first name">Confirm Password</label>
                                <input type="Password" :class="[ 'form-control', {'error-border': confirmpasswordError }, ]" placeholder="Confirm Password" v-model="form.password_confirmation">
                                <div class="error-card" v-if="!!error.password_confirmation" > {{error.password_confirmation[0]  }}</div>

                            </div>
                           
                            <base-spinner v-if="isLoading"></base-spinner>
                            <div class="form-group mt-2" v-else>
                                    <BaseButton> Register</BaseButton>
                            </div>
                            
                            <div class="form-group mt-2">
                                <div class="text-center">Already have existing account? <a href="/login">Login instead</a></div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6 hide-on-mobile">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->
                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                            </ul>
                            <!-- The slideshow -->
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="slider-feature-card">
                                        <img src="https://picsum.photos/200/300" alt="">
                                        <h3 class="slider-title">Title Here</h3>
                                        <p class="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio!</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="slider-feature-card">
                                        <img src="https://picsum.photos/200/300" alt="">
                                        <h3 class="slider-title">Title Here</h3>
                                        <p class="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, debitis?</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Left and right controls -->
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import BaseButton from '../../components/BaseButton.vue';

    export default {

            components: {
                BaseButton,
            },

            computed: {
                firstnameError() {
                    return !!this.error.first_name; 
                },
                lastnameError() {
                    return !!this.error.last_name; 
                },
                emailError() {
                    return !!this.error.email; 
                },
                passwordError() {
                    return !!this.error.password; 
                },
                confirmpasswordError() {
                    return !!this.error.password_confirmation; 
                },
            },

            data() {
                return {
                    form: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                    },

                    isLoading: false,
                    error: {},
                    requestError: null
                }
            },

            methods: {
                async registerUser(){

                   
                    
                    this.isLoading = true;
                    await axios.post('api/register', this.form).then((response)=>{
                        
                        console.log(response);
                       
                                      
                    }).catch((e)=>{
                        this.error = e.response.data.errors;
                    }).finally(()=>{
                        this.isLoading = false;
                        
                    });
 
                }
            },


        
    }
</script>

<style  scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);

body {
    background: #f5f5f5;
}

@media only screen and (max-width: 767px) {
    .hide-on-mobile {
        display: none;
    }
}

.login-box {
     background-size: cover;
    background-position: center;
    padding: 50px;
    margin: 34px auto;
    min-height: 700px;
    -webkit-box-shadow: 0 2px 60px -5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 60px -5px rgba(0, 0, 0, 0.1);
}

.logo {
    font-family: "Script MT";
    font-size: 54px;
    text-align: center;
    color: #888888;
    margin-bottom: 50px;
}

.logo .logo-font {
    color: #3BC3FF;
}

@media only screen and (max-width: 767px) {
    .logo {
        font-size: 34px;
    }
}

.header-title {
    text-align: center;
    margin-bottom: 50px;
}

.login-form {
    max-width: 300px;
    margin: 0 auto;
}

.login-form .form-control {
    border-radius: 0;
    margin-bottom: 4px;

}

.login-form .form-group {
    margin: 10px 0px;
    position: relative;
}

.login-form .form-group .forgot-password {
    position: absolute;
    top: 6px;
    right: 15px;
}

.login-form .btn {
    border-radius: 0;
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.login-form .btn.btn-primary {
    background: #0076DE;
    border-color: #0076DE;
}

.slider-feature-card {
    background: #fff;
    max-width: 280px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    -webkit-box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
}

.slider-feature-card img {
    height: 80px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.slider-feature-card h3,
.slider-feature-card p {
    margin-bottom: 30px;
}

.carousel-indicators {
    bottom: -50px;
}

.carousel-indicators li {
    cursor: pointer;
}
.error-border{
    border: 1px solid red;

}
.error-card{
    padding:2px 4px;
    color: red;
    font-size: 14px;
    display: inline-block;
    border-radius: 4px;
    
}
</style>