<script setup lang="ts">
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

</script>
<template>
  <div class="flex space-x-4 m-4 items-center">
    <div class="flex-none basis-12">
    </div>
    <div class="grow">
      <div class="text-center text-lg">
        Plannen
      </div>
    </div>
    <div class="flex-none">
      <Avatar icon="pi pi-user" class="mr-2" size="large" shape="circle" />
    </div>
  </div>
  <Divider class="!pb-0 !mb-0"/>
</template>