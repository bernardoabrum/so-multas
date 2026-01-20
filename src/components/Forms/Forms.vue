<template>
  <div class="cmp-forms">
    <p>Forms</p>
    <form @submit="submitForm">
      <input type="text" placeholder="Nome" v-model="name" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <MaskInput
        mask="(##) #####-####"
        pattern="\(\d{2}\)\s\d{5}-\d{4}"
        placeholder="Telefone"
        v-model="phone"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "./Forms.scss";
import { MaskInput } from "vue-3-mask";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const name = ref("");
const phone = ref("");
const email = ref("");

const submitForm = async (event) => {
  event.preventDefault();

  const payload = {
    nome: name.value,
    email: email.value,
    telefone: phone.value,
    data: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "leads"), {
      ...payload,
    });
  } catch (error) {
    console.error("Erro ao enviar o formulário: ", error);
    return;
  }

  alert("Enviado com sucesso!");
};
</script>
