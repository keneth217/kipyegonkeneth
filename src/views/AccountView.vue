<template>
  <v-container
    fluid
    class="hey"
  >
  <v-row>
    <v-col>
      <v-card class="text-center account justify-center mt-15" style="width: 600px">
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
    </v-col>
  </v-row>

  </v-container>
</template>

<script>
import axios from '../axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        username:'',
        email: '',
        password: ''
      }
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
      const formData = {
        email: this.form.email,
        password: this.form.password
      };

      axios.post('login', formData)
        .then(response => {
          // Handle success response
          console.log(response.data);
          let token = response.data.token;

          // Store the token in localStorage
          localStorage.setItem('token', token);


          // Redirect to the dashboard or desired page
          this.$router.push('dashboard');

          this.callAlert("success", "Logged in  successfully");

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
.account{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hey{
  position: relative;
  width: 100%; /* Adjust the width as needed */
  height: 100vh; /* Adjust the height as needed */
  background-color: #f0f0f0; /* Container background color */
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  background-color: rgb(152, 152, 144);
}
.background-image {
  background-position: center;
}
</style>

