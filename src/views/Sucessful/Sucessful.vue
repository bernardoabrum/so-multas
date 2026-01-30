<template>
  <div class="sucessful-view">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.webp" alt="Logo Só Multas" />
      </div>
      <div class="contact">
        <div class="text">
          <h1>Obrigado por entrar em contato conosco!</h1>
          <h2>
            Sua mensagem foi recebida com sucesso. Agradecemos por nos escolher
            para te ajudar a recorrer das suas multas. Retornaremos o mais breve
            possível.
          </h2>
        </div>
        <a
          href="https://wa.me/+553298687371?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista!"
          target="_blank"
          rel="noopener"
          >Iniciar uma conversa no WhatsApp</a
        >
      </div>
      <div class="list">
        <div class="item">
          <FontAwesomeIcon :icon="faCheck" />
          <p>Já estamos avaliando as informações que você nos enviou.</p>
        </div>
        <div class="item">
          <FontAwesomeIcon :icon="faCheck" />
          <p>Você será contatado por um especialista o mais breve possível.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./Sucessful.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
</script>
