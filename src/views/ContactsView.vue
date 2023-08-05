<template>
  <v-container fluid class="text-center bg ">
    <v-row>
      <v-col lg="12 " sm="12" class="text-center  back ">
        <div class="text-center ">
          <h6 class="text-h4 text-center justify-center "
            >Get In Touch</h6
          >
        </div>
      </v-col>
      <v-col lg="5" sm="12" class="mt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255344.49358054332!2d35.93877355687771!3d-0.31581090607204726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d90cf610bef%3A0xf2f21833bc7cc21a!2sNakuru!5e0!3m2!1sen!2ske!4v1689952680295!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
      <v-col lg="6" sm="12" class="">
        <v-card>
          <v-card-title class="title text-center text-decoration-underline"
            >fill the form below</v-card-title
          >
          <form @submit.prevent="submit" class="my-5 mx-10">
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
            <v-btn color="success" class="me-4" type="submit"> submit </v-btn>

            <v-btn @click="handleReset" color="warning"> clear </v-btn>
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
.bg{
  background-color: rgb(152, 152, 144);
}
.back{
  background-image: url(./../assets/straight.svg);
  width: 100%;
  height: 200px;
  display: block;
  background-size: cover;
  top: 0px;
  bottom: 50px;
}
.title{
  font-size: 30px;
  color: #bd2d9b;
  text-shadow: 5px 2px 5px rgb(203, 196, 203);
  font-family: 'Times New Roman', Times, serif;
}
</style>
