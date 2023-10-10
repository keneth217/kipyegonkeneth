<template>
  <v-container fluid class="text-center background " jusify="center">
    <v-row>
      <v-col class="title">
        <h6> Get In Touch</h6>
      </v-col>
    </v-row>
  <v-row justify="center">
      <v-col lg="6" sm="12" class="mt-5 text-center  account" >
        <v-card>
        
          <form @submit.prevent="submit" class=" mx-2">
            <v-text-field
              v-model="name.value.value"
              :counter="10"
              :error-messages="name.errorMessage.value"
              variant="outlined"
              label="Name"
            ></v-text-field>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
              variant="outlined"
            ></v-text-field>

            <v-textarea
              v-model="phone.value.value"
              :counter="7"
              variant="outlined"
              :error-messages="phone.errorMessage.value"
              label="message"
            ></v-textarea>
            <v-btn color="success" class="mx-4 mb-4" type="submit"> submit </v-btn>

            <v-btn @click="handleReset" class="mb-4" color="warning"> clear </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    // name (value) {
    //   if (value?.length >= 2) return true

    //   return 'Name needs to be at least 2 characters.'
    // },

    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
    select(value) {
      if (value) return true;

      return "Select an item.";
    },
    checkbox(value) {
      if (value === "1") return true;

      return "Must be checked.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<style scoped>
.background {
  width: 100%;
  height: 800px;
  display: block;
  background-size: cover;
  top: 0;
  background-image: url(./../assets/strait.svg);

}
.title{
  font-size: 40px;
  text-transform: capitalize;
  color: #9c2c77;
  text-shadow: 5px 2px 5px rgb(3, 3, 3);
  font-family: 'Times New Roman', Times, serif;
}
.account {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
