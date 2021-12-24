<template>
  <div class="btns">

    <div class="row">
      <h3>btn default</h3>
      <button class="btn btn-sm">normal sm</button>
      <button class="btn btn-primary">primary md (default)</button>
      <button class="btn btn-lg btn-success">success lg</button>
      <button class="btn btn-lg btn-danger">danger lg</button>
      <button class="btn btn-warning">warning</button>
      <button class="btn btn-info">info</button>
    </div>
  
    <hr />

    <div class="row">
      <h3>btn outlined</h3>
      <button class="btn btn-outlined">default</button>
      <button class="btn btn-outlined btn-primary">primary</button>
      <button class="btn btn-outlined btn-success">success</button>
      <button class="btn btn-outlined btn-danger">danger</button>
      <button class="btn btn-outlined btn-warning">warning</button>
      <button class="btn btn-outlined btn-info">info</button>
    </div>
    <hr />

    <div class="row">
      <h3>btn rounded</h3>
      <button class="btn btn-rounded">default</button>
      <button class="btn btn-rounded btn-primary">primary</button>
      <button class="btn btn-rounded btn-success">success</button>
      <button class="btn btn-rounded btn-danger">danger</button>
      <button class="btn btn-rounded btn-outline btn-warning">warning</button>
      <button class="btn btn-rounded btn-outline btn-info">info</button>
    </div>
    <hr />

    <div class="row">
      <h3>btn circle</h3>
      <button class="btn btn-circle">+</button>
      <button class="btn btn-circle btn-primary">+</button>
      <button class="btn btn-circle btn-success">+</button>
      <button class="btn btn-circle btn-danger">+</button>
      <button class="btn btn-circle btn-outline btn-warning">+</button>
      <button class="btn btn-circle btn-outline btn-info">+</button>
    </div>
    <hr />

    <div class="row">
      <h3>btn disabled</h3>
      <button class="btn btn-disabled">default</button>
      <button class="btn btn-disabled btn-primary">primary</button>
      <button class="btn btn-disabled btn-success">success</button>
      <button class="btn btn-outline btn-disabled btn-danger">danger</button>
      <button class="btn btn-outline btn-disabled btn-warning">warning</button>
      <button class="btn btn-outline btn-disabled btn-info">info</button>
    </div>
    <hr />

    <div class="row">
      <h3>btn size</h3>
      <button class="btn btn-primary btn-mini">mini</button>
      <button class="btn btn-primary btn-sm">small</button>
      <button class="btn btn-primary">default (medium)</button>
      <button class="btn btn-primary btn-lg">large</button>

      <br />
      <button class="btn btn-success btn-outline btn-mini">mini</button>
      <button class="btn btn-success btn-outline btn-sm">small</button>
      <button class="btn btn-success btn-outline">default (medium)</button>
      <button class="btn btn-success btn-outline btn-lg">large</button>
    </div>
    <hr />

  </div> 
</template>

<style lang="scss" scoped>
.btns {
  .row {
    margin: 20px;
  }

  .btn {
    margin: 10px;
  }
}
</style>