<template>
    <v-container
      fluid
      class="background-image text-center hey bg justify-center d-flex"
    >
      <v-card class="text-center justify-center mt-15" style="width: 400px">
        <v-toolbar color="deep-purple-accent-4" cards dark flat>
          <v-card-title class="text-h6 font-weight-regular">login</v-card-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-text-field
            id="email"
            v-model="form.email"
            color="deep-purple"
            label="Email address"
            type="email"
          ></v-text-field>
          <v-text-field
            id="password"
            v-model="form.password"
            color="deep-purple"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
        
          <v-btn  color="deep-purple-accent-4" @click="submitForm">Submit</v-btn>
        </v-card-actions>
       
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        isValid: false,
        isLoading: false,
        dialog: false,
      };
    },
    methods: {
      callAlert(type, message) {
        Swal.fire({
          icon: type,
          title: type,
          text: message,
          showConfirmButton: false,
          timer: 2000
        });
      },
      submitForm() {
        this.$store.dispatch("removeToken");
        const formData = {
          username: this.form.email,
          password: this.form.password
        };
        axios.post('http://localhost:3000/kenwaves/api/v1/users/login', formData)
          .then(response => {
            // Handle success response
            console.log(response.data);
            let token = response.data.token;
            this.$store.commit("setToken", token);
            this.$router.push({ name: "dashboard" });
            this.callAlert("success", "Logged in successfully");
            // Reset the form
            this.form = {
              email: '',
              password: ''
            };
          })
          .catch(error => {
            console.error("error: ", error);
            this.callAlert("error", "Wrong username/password");
          });
      }
    }
  };
  </script>
  
  <style>
  .bg {
    background-color: rgb(152, 152, 144);
  }
  .background-image {
    background-position: center;
  }
  </style>
  