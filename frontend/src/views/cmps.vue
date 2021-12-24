<template>
  <div class="toggles">
    
    <!-- <section>
      <h1>App </h1>
      <div class="row">
        
      </div>
    </section>

    <hr /> -->

    <section>
      <h1>App checkbox</h1>
      <div class="row">
        
      </div>
    </section>

    <hr />

    <section>
      <h1>Btns </h1>
      <div class="outer-row">
        <div class="col-12">
          <h4>btn default</h4>
        </div>
        <div class="row">
          <div class="col-3">
            <button class="btn btn-sm">normal sm</button>
          </div>
          <div class="col-5">
            <button class="btn btn-primary">primary md (default)</button>
          </div>
          <div class="col-3">
            <button class="btn btn-lg btn-success">success lg</button>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <button class="btn btn-lg btn-danger">danger lg</button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning">warning</button>
          </div>
          <div class="col-3">
            <button class="btn btn-info">info</button>
          </div>
        </div>
      </div>
    
      <hr />

      <div class="outer-row">
        <div class="col-12">
          <h4>btn outlined</h4>
        </div>
        <div class="row">
          <div class="col-3">
            <button class="btn btn-outlined">default</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outlined btn-primary">primary</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outlined btn-success">success</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outlined btn-danger">danger</button>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-outlined btn-warning">warning</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outlined btn-info">info</button>
          </div>
        </div>
      </div>
      <hr />

      <div class="outer-row">
        <div class="col-12">
          <h4>btn rounded</h4>
        </div>
        <div class="row">
          <div class="col-3">
            <button class="btn btn-rounded">default</button>
          </div>
          <div class="col-3">
            <button class="btn btn-rounded btn-primary">primary</button>
          </div>
          <div class="col-3">
            <button class="btn btn-rounded btn-success">success</button>
          </div>
          <div class="col-3">
            <button class="btn btn-rounded btn-danger">danger</button>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-rounded btn-outline btn-warning">warning</button>
          </div>
          <div class="col-3">
            <button class="btn btn-rounded btn-outline btn-info">info</button>
          </div>
        </div>
      </div>
      <hr />

      <div class="outer-row">
        <div class="col-12">
          <h4>btn circle</h4>
        </div>
        <div class="row">
          <div class="col-2">
            <button class="btn btn-circle">+</button>
          </div>
          <div class="col-2">
            <button class="btn btn-circle btn-primary">+</button>
          </div>
          <div class="col-2">
            <button class="btn btn-circle btn-success">+</button>
          </div>
          <div class="col-2">
            <button class="btn btn-circle btn-danger">+</button>
          </div>
          <div class="col-2">
            <button class="btn btn-circle btn-outline btn-warning">+</button>
          </div>
          <div class="col-2">
            <button class="btn btn-circle btn-outline btn-info">+</button>
          </div>
        </div>

      </div>
      <hr />

      <div class="outer-row">
        <div class="col-12">
          <h4>btn disabled</h4>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-disabled">default</button>
          </div>
          <div class="col-3">
            <button class="btn btn-disabled btn-primary">primary</button>
          </div>
          <div class="col-3">
            <button class="btn btn-disabled btn-success">success</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outline btn-disabled btn-danger">danger</button>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-outline btn-disabled btn-warning">warning</button>
          </div>
          <div class="col-3">
            <button class="btn btn-outline btn-disabled btn-info">info</button>
          </div>
        </div>
      </div>

      <hr />

      <div class="outer-row">
        <div class="col-12">
          <h4>btn size</h4>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-primary btn-mini">mini</button>
          </div>
          <div class="col-3">
            <button class="btn btn-primary btn-sm">small</button>
          </div>
          <div class="col-4">
            <button class="btn btn-primary">default (medium)</button>
          </div>
          <div class="col-4">
            <button class="btn btn-primary btn-lg">large</button>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <button class="btn btn-success btn-outlined btn-mini">mini</button>
          </div>
          <div class="col-3">
            <button class="btn btn-success btn-outlined btn-sm">small</button>
          </div>
          <div class="col-4">
            <button class="btn btn-success btn-outlined">default (medium)</button>
          </div>
          <div class="col-3">
            <button class="btn btn-success btn-outlined btn-lg">large</button>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section class="inputs">
      <h1>App Input</h1>
      <div class="row">
        <div class="col-4">
          <h4>input default</h4>
          <AppInput placeholder="Name" v-model="inputModel" />  
        </div>
        <div class="col-4">
          <h4>input required</h4>
          <AppInput :required="true" />  
        </div>
        <div class="col-4">
          <h4>input has error</h4>
          <AppInput error-message="something went wrong..." />  
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <h4>input disabled</h4>
          <AppInput :disabled="true" placeholder="Email" />  
        </div>
        <div class="col-4">
          <h4>input prefix icon</h4>
          <AppInput>
            <template #prefix-icon>
              <i class="far fa-heart"></i>
            </template>
          </AppInput>  
        </div>
        <div class="col-4">
          <h4>input suffix icon</h4>
          <AppInput>
            <template #suffix-icon>
              <i class="far fa-heart"></i>
            </template>
          </AppInput>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <h4>input password</h4>
          <AppInput type="password" />
        </div>
        <div class="col-4">
          <h4>input number</h4>
          <AppInput type="number" />
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App radio</h1>
      <div class="row">
        <AppRadio label="1" v-model="radioOption">Option 1</AppRadio>
        <AppRadio label="2" v-model="radioOption">Option 2</AppRadio>
        <AppRadio label="3" v-model="radioOption" :disabled="true">Disabled</AppRadio>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Alert</h1>
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
      <h1>App Loader</h1>
      <div class="row">
        <div class="col-6">
          <h4>loader default</h4>
          <div class="loader-box">
            <AppLoader></AppLoader>  
          </div>
        </div>
        <div class="col-6">
          <h4>loader with text</h4>
          <div class="loader-box">
            <AppLoader>Loading...</AppLoader>  
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Toggle</h1>
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
      <h1>App Badge</h1>
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
import AppInput from '@/components/form/app-input.vue'
import AppRadio from '@/components/form/app-radio.vue'

export default {
  components: {
    AppToggle,
    AppBadge,
    AppLoader,
    AppAlert,
    AppInput,
    AppRadio
  },
  data() {
    return {
      toggleOn: false,
      inputModel: "",
      radioOption: "1"
    }
  }
}
</script>
<style lang="scss" scoped>
.toggles {

  section {
    margin: 20px 0;

    h1, h4 {
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

  .outer-row {
    margin: 20px;
  }

  .inputs {
    .col-4 {
      padding: 0 5px;
    }
  }
}
</style>