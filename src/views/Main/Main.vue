<template>
  <div class="main-view">
    <section class="section first">
      <div class="text">
        <h1>
          Recursos de multas especializados:<br />
          <b>Proteja o seu direito de dirigir!</b>
        </h1>
        <h2>
          Atuamos em todo o <b>Brasil</b> para auxiliar no recurso de multas de
          trânsito com <b>agilidade, transparência e respeito à legislação</b>.
        </h2>
      </div>
      <div class="image">
        <img src="@/assets/section1.png" alt="#" />
      </div>
      <div class="form">
        <Forms />
      </div>
    </section>
    <div class="divisory">
      <div class="container">
        <img src="@/assets/logo.webp" alt="Logo Só Multas" />
      </div>
    </div>
    <section class="section second">
      <div class="text">
        <div class="advantages">
          <FontAwesomeIcon :icon="faClock" />
          <p>Rápido</p>
        </div>
        <div class="advantages">
          <FontAwesomeIcon :icon="faComputer" />
          <p>Sem burocracia</p>
        </div>
        <div class="advantages">
          <FontAwesomeIcon :icon="faPiggyBank" />
          <p>Preço justo</p>
        </div>
        <div class="advantages">
          <FontAwesomeIcon :icon="faHouseLaptop" />
          <p>Sem sair de casa</p>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/section2.png" alt="#" />
      </div>
    </section>
    <section class="section third">
      <div class="text">
        <p>Resolvemos qualquer problema relacionado a multas de trânsito</p>
        <p>
          A Só Multas é a maior especialista em proteção ao direito de dirigir
          do Brasil.
        </p>
      </div>
      <div class="fines">
        <div class="container">
          <div class="fine-container">
            <p>Multas de Lei Seca</p>
            <img src="@/assets/bafometro.png" alt="" />
          </div>
          <div class="fine-container">
            <p>Multas por velocidade</p>
            <img src="@/assets/semaforo.png" alt="" />
          </div>
          <div class="fine-container">
            <p>Multas na Provisória</p>
            <img src="@/assets/id.png" alt="" />
          </div>
          <div class="fine-container">
            <p>Recursos Simples</p>
            <img src="@/assets/pare.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import "./Main.scss";
import { Forms } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faClock,
  faComputer,
  faPiggyBank,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
</script>
