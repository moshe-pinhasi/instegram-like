<template>
  <div class="toggles">
    
    <section>
      <h3>App Alert</h3>
      <div class="row">
        <div class="col-12">
          <AppAlert type="success">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="danger">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="info">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="warning">Some error occure while...</AppAlert>  
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <AppAlert type="success" :is-light="true">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="danger" :is-light="true">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="info" :is-light="true">Some error occure while...</AppAlert>  
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppAlert type="warning" :is-light="true">Some error occure while...</AppAlert>  
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h3>App Loader</h3>
      <div class="row">
        <div class="loader-box col-6">
          <h4>loader default</h4>
          <AppLoader />  
        </div>
        <div class="loader-box col-6">
        <h4>loader with text</h4>
          <AppLoader>Loading...</AppLoader>  
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h3>Toggle</h3>
      <div class="row">
        <div class="col-4">
          <h4>toggle default</h4>
          <AppToggle />  
        </div>

        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <h4>toggle disabled</h4>
              <AppToggle :disabled="true"/>
            </div>

            <div class="col-6">
              <h4>toggle disabled</h4>
              <AppToggle v-model="toggleOn" :disabled="true"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr />
    
    <section>
      <h3>App Badge</h3>
      <div class="row">
        <div class="col-4">
          <h4>badge default</h4>
          <AppBadge value="4">messages</AppBadge>  
        </div>

        <div class="col-4">
          <h4>badge default</h4>
          <AppBadge value="444">messages</AppBadge>  
        </div>

        <div class="col-4">
          <h4>badge dot</h4>
          <AppBadge :dot="true">messages</AppBadge>  
        </div>
      </div>
    </section>
  </div> 
</template>
<script>
import AppToggle from '@/components/form/app-toggle.vue'
import AppBadge from '@/components/form/app-badge.vue'
import AppLoader from '@/components/form/app-loader.vue'
import AppAlert from '@/components/form/app-alert.vue'

export default {
  components: {
    AppToggle,
    AppBadge,
    AppLoader,
    AppAlert
  },
  data() {
    return {
      toggleOn: false
    }
  }
}
</script>
<style lang="scss" scoped>
.toggles {

  section {
    margin: 20px 0;

    h3, h4 {
      margin-bottom: 10px;
    }
  }

  .loader-box{
    position: relative;
    height: 200px;
    width: 200px;
  }

  .row {
    margin-bottom: 10px;
  }
}
</style>