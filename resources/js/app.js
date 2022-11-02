/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import { createApp } from "vue";

//sweet alert

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//components
import App from "./App.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseSpinner from "./components/BaseSpinner.vue";

import router from "./router/router";
import vuetify from "./plugins/vuetify";
import store from "./store/store";

let app = createApp({});

app.use(VueSweetalert2);
app.use(router);
app.use(vuetify);
app.use(store);

//resgiter global component
app.component("app", App);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);

app.mount("#app");



//calling sweet alert

// this.$swal({
// position: 'top-end',
// icon: 'success',
// title: 'Your work has been saved',
// showConfirmButton: false,
// timer: 1500

//                   });
