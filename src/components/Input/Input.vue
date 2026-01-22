<template>
  <div class="cmp-input">
    <input
      v-if="maskedInput === false"
      :class="{ invalid: invalidInput }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        validateInput($event.target.value);
        $emit('update:modelValue', $event.target.value);
      "
      @blur="validateInput(modelValue)"
      maxlength="100"
      required
    />
    <MaskInput
      v-else
      :class="{ invalid: invalidInput }"
      :type="type"
      :placeholder="placeholder"
      @input="
        validateInput($event.target.value);
        $emit('update:modelValue', $event.target.value);
      "
      @blur="validateInput(modelValue)"
      :mask="mask"
      :pattern="pattern"
      maxlength="100"
      required
    />
    <p :class="['message', { visible: invalidInput }]">
      Você deve preencher este campo!
    </p>
  </div>
</template>

<script setup>
import "./Input.scss";
import { ref } from "vue";
import { MaskInput } from "vue-3-mask";

const invalidInput = ref(false);

defineProps({
  maskedInput: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  mask: {
    type: String,
  },
  pattern: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);

const validateInput = (value) => {
  if (!value) {
    invalidInput.value = true;
  } else {
    invalidInput.value = false;
  }
};
</script>
