<template>
  <div class="cmps-page">
    
    <!-- <section>
      <h1>App </h1>
      <div class="row">
        
      </div>
    </section>

    <hr /> -->

    <section class="inputs">
      <h1>App Textarea</h1>
      <div class="row">
        <div class="col-6">
          <h4>Textarea default</h4>
          <AppTextarea placeholder="Name" v-model="textareaModel" />  
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Modal</h1>
      <div class="row">
       <div class="col-4">
        <button type="button" @click="openModalTop = true">
          Toggle Modal Top
        </button>
        <AppModal v-model="openModalTop" :close-on-click="false">
          <AppCard>
            <div slot="header" class="">
              Modal Card Hedaer
            </div>
            <div v-for="o in [1,2,3,4]" :key="o" class="text item">
              {{'List item ' + o }}
            </div>

            <footer>
              <button @click="openModalTop = false">close</button>
            </footer>
          </AppCard>
        </AppModal>  
       </div>
       <div class="col-4">
          <button type="button" @click="openModalBottom = true">
          Toggle Modal Top
        </button>
        <AppModal v-model="openModalBottom" position="bottom">
          <AppCard>
            <div slot="header" class="">
              Modal Card Hedaer
            </div>
            <div v-for="o in [1,2,3,4]" :key="o" class="text item">
              {{'List item ' + o }}
            </div>
          </AppCard>
        </AppModal>  
       </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Drawer</h1>
      <div class="row">
        <div class="col-3">
          <button type="button" @click="showDrawerLeft = !showDrawerLeft">
            Toggle Drawer Left
          </button>
          <AppDrawer v-model="showDrawerLeft">some content</AppDrawer>  
        </div>
        <div class="col-3">
          <button type="button" @click="showDrawerRight = !showDrawerRight">
            Toggle Drawer Right
          </button>
          <AppDrawer v-model="showDrawerRight" position="right">some content</AppDrawer>
        </div>
        <div class="col-3">
          <button type="button" @click="showDrawerTop = !showDrawerTop">
            Toggle Drawer Top
          </button>
          <AppDrawer v-model="showDrawerTop" position="top">some content</AppDrawer>
        </div>
        <div class="col-3">
          <button type="button" @click="showDrawerBottom = !showDrawerBottom">
            Toggle Drawer Bottom
          </button>
          <AppDrawer v-model="showDrawerBottom" position="bottom">some content</AppDrawer>
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Menu</h1>
      <div class="row">

        <div class="col-3">
          <h3>default</h3>
          <AppMenu @select="handleSelect">
            <AppMenuItem
              v-for="item in [
                {val: 'profile', txt: 'Profile'},
                {val: 'saved', txt: 'Saved'},
                {val: 'logout', txt: 'Logout'}
              ]" 
              :key="item.val" :item="item">{{item.txt}}</AppMenuItem>
          </AppMenu>
        </div>
        <div class="col-4">
          <h3>open at right side</h3>
          <AppMenu open-at="right" @select="handleSelect">
            <AppMenuItem item="Action 1">Action 1</AppMenuItem>
            <AppMenuItem item="Action 2">Action 2</AppMenuItem>
            <AppMenuItem item="Action 3">Action 3</AppMenuItem>
          </AppMenu>
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Messages</h1>
      <div class="row">
        <div class="col-6">
          <button type="button" class="" @click="showMessages('success')">
            Show Success Message
          </button>
        </div>

        <div class="col-6">
          <button type="button" class="" @click="showMessages('error')">
            Show Error Message
          </button>
        </div>
      </div>
    </section>

    <hr />

    <section>
      <h1>App Card</h1>
      <div class="row">

        <div class="row">
          <div class="col-12">
            <button type="button" class="" @click="toggleCardShadow">
               {{cardShadow ? 'Hide Shadow' : 'Show Shadow'}}
            </button>
          </div>
        </div>
        <div class="col-12">
          <AppCard :has-shadow="cardShadow">
            <div slot="header" class="">
              Card name
            </div>
            <div v-for="o in [1,2,3,4]" :key="o" class="text item">
              {{'List item ' + o }}
            </div>
          </AppCard>
        </div>        
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
          <h4>btn txt</h4>
        </div>
        <div class="row">
          <div class="col-2">
            <button class="btn btn-txt">primary</button>
          </div>
          <div class="col-2">
            <button class="btn btn-txt btn-success">success</button>
          </div>
          <div class="col-2">
            <button class="btn btn-txt btn-danger">danger</button>
          </div>
          <div class="col-2">
            <button class="btn btn-txt btn-warning">warning</button>
          </div>
          <div class="col-2">
            <button class="btn btn-txt btn-info">info</button>
          </div>
          <div class="col-2">
            <button class="btn btn-txt btn-disabled">disabled</button>
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
      <h1>App checkbox</h1>
      <div class="row">
        <AppCheckbox v-model="checkboxModel" label="red">Red </AppCheckbox>
        <AppCheckbox v-model="checkboxModel" label="green">Green </AppCheckbox>
        <AppCheckbox v-model="checkboxModel" label="yellow">Yellow </AppCheckbox>
        <AppCheckbox v-model="checkboxModel" :disabled="true" label="orange">Orange </AppCheckbox>
      </div>
      <div class="row">
        Checked: {{checkboxModel}}
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
import AppBadge from '@/components/common/app-badge.vue'
import AppLoader from '@/components/common/app-loader.vue'
import AppAlert from '@/components/common/app-alert.vue'
import AppCard from '@/components/common/app-card.vue'
import AppDrawer from '@/components/common/app-drawer.vue'
import AppModal from '@/components/common/app-modal.vue'
import AppMenu from '@/components/common/app-menu/app-menu.vue'
import AppMenuItem from "@/components/common/app-menu/app-menu-item.vue";
import AppToggle from '@/components/form/app-toggle.vue'
import AppInput from '@/components/form/app-input.vue'
import AppRadio from '@/components/form/app-radio.vue'
import AppCheckbox from '@/components/form/app-checkbox.vue'
import AppTextarea from '@/components/form/app-textarea.vue'
import {alertService} from '@/services/alert.service'

export default {
  components: {
    AppToggle,
    AppBadge,
    AppLoader,
    AppAlert,
    AppInput,
    AppRadio,
    AppCheckbox,
    AppCard,
    AppMenu,
    AppMenuItem,
    AppDrawer,
    AppModal,
    AppTextarea,
  },
  data() {
    return {
      toggleOn: false,
      inputModel: "",
      textareaModel: "",
      radioOption: "1",
      checkboxModel: [],
      cardShadow: false,
      alertCount: 0,
      showDrawerLeft: false,
      showDrawerRight: false,
      showDrawerTop: false,
      showDrawerBottom: false,
      openModalTop: false,
      openModalBottom: false,
    }
  },
  created() {

  },
  methods: {
    toggleCardShadow() {
      this.cardShadow = !this.cardShadow
    },
    showMessages(type) {
      this.alertCount++
      if (type === 'success') {
        alertService.success(`Example of success message #${this.alertCount}`)
      }

      if (type === 'error') {
        alertService.error(`Example of error message #${this.alertCount}`, new Error('example for error'))
      }

      // alertService.success('some text here 1')
      // setTimeout( () => {
      //   alertService.error('some error 2', new Error('ddqw'))
      // }, 2000)

      // setTimeout( () => {
      //   alertService.success('some text here 3')
      // }, 3000)

      // setTimeout( () => {
      //   alertService.success('some text here 4')
      // }, 4000)
    },
    handleSelect(selectedItem) {
      console.log('selectedItem', selectedItem);
    }
  }
}
</script>
<style lang="scss" scoped>
.cmps-page {
  font-size: 1.6rem;

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