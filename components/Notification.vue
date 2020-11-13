<template>
  <v-alert
  elevation="11"
  prominent
  :type='type'
>
{{ message }}
</v-alert>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['error', 'success'].includes(val)
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
