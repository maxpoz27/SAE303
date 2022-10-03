<template id="">
  <footer>
    <p>JSP</p>
  </footer>

</template>


<a class="tab" v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab" >l</a>
