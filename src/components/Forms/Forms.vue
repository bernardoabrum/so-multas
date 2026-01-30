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
      <button type="submit">
        <span v-if="!isLoading">Enviar informações pra contato</span>
        <span v-else>
          <FontAwesomeIcon :icon="faCircleNotch" spin />
        </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import "./Forms.scss";
import { ref } from "vue";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Input } from "@/components";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();

const name = ref("");
const phone = ref("");
const email = ref("");
const isLoading = ref(false);

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
    isLoading.value = true;
  } catch (error) {
    console.error("Erro ao enviar o formulário: ", error);
    return;
  } finally {
    name.value = "";
    email.value = "";
    phone.value = "";

    setTimeout(() => {
      router.push("/obrigado");
    }, 1000);
  }
};
</script>
