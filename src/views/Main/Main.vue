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
        <h1>Resolvemos qualquer problema relacionado a multas de trânsito</h1>
        <h1>
          A Só Multas é a maior especialista em proteção ao direito de dirigir
          do Brasil.
        </h1>
      </div>
      <div class="fines">
        <div class="container">
          <div class="fine-container">
            <h2>Multas de Lei Seca</h2>
            <img src="@/assets/bafometro.png" alt="" />
          </div>
          <div class="fine-container">
            <h2>Multas por velocidade</h2>
            <img src="@/assets/semaforo.png" alt="" />
          </div>
          <div class="fine-container">
            <h2>Multas na Provisória</h2>
            <img src="@/assets/id.png" alt="" />
          </div>
          <div class="fine-container">
            <h2>Recursos Simples</h2>
            <img src="@/assets/pare.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <div class="background-section">
      <section class="section fourth">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6aHj_VYhs-Q"
          >
          </iframe>
        </div>
        <div class="text">
          <h1>É possível recorrer a multa da lei seca?</h1>
          <h2><b>Sim,</b> entenda melhor no video ao lado:</h2>
        </div>
      </section>
    </div>
    <section class="section fifth">
      <div class="punishments">
        <h2>Essas são as as penalidades para quem é pego na LEI SECA:</h2>
        <div class="box">
          <p>Multa no valor de R$ 2934,67</p>
        </div>
        <div class="box">
          <p>Perda do Direito de Dirigir por 12 meses.</p>
        </div>
        <div class="box">
          <p>Curso de reciclagem</p>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/section4.webp" alt="#" />
      </div>
      <div class="text">
        <p>Nós podemos te ajudar a evitar todos esses problemas.</p>
        <p>Fale agora mesmo com um especialista em <b>LEI SECA.</b></p>
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
