<template>
  <div class="cmp-forms">
    <div class="title">
      <p>Não perca tempo!</p>
      <p>Envie suas informações e entraremos em contato.</p>
    </div>
    <form @submit="submitForm">
      <Input type="text" placeholder="Nome" v-model="name" />
      <Input type="email" placeholder="Email" v-model="email" />
      <Input
        :maskedInput="true"
        type="tel"
        placeholder="Telefone"
        v-model="phone"
        mask="(##) #####-####"
        pattern="\(\d{2}\)\s\d{5}-\d{4}"
      />
      <button type="submit">Enviar informações pra contato</button>
    </form>
  </div>
</template>

<script setup>
import "./Forms.scss";
import { ref } from "vue";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Input } from "@/components";

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
  } finally {
    name.value = "";
    email.value = "";
    phone.value = "";
  }

  alert("Enviado com sucesso!");
};
</script>
