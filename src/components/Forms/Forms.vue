<template>
  <div class="cmp-forms">
    <p>Forms</p>
    <form @submit="submitForm">
      <input type="text" placeholder="Nome" v-model="name" required />
      <MaskInput
        mask="(##) #####-####"
        pattern="\(\d{2}\)\s\d{5}-\d{4}"
        placeholder="Telefone"
        v-model="phone"
        required
      />
      <input type="email" placeholder="Email" v-model="email" required />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "./Forms.scss";
import { MaskInput } from "vue-3-mask";

const name = ref("");
const phone = ref("");
const email = ref("");

const submitForm = (event) => {
  event.preventDefault();
  console.log("Formulário enviado:", {
    name: name.value,
    phone: phone.value,
    email: email.value,
  });
};
</script>
