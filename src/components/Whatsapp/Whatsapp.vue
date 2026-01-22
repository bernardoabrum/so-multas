<template>
  <div class="cmp-whatsapp">
    <a
      href="https://wa.me/+553298687371?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista!"
      target="_blank"
      rel="noopener"
    >
      <FontAwesomeIcon :icon="faWhatsapp" />
    </a>
  </div>
</template>

<script setup>
import "./Whatsapp.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
</script>
