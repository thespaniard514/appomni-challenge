<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-wrapper">
        <div class="modal-container"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription">
          <header
            class="modal-header"
            id="modalTitle">
            <div class="row">
              <div class="eleven columns u-full-width">
                <slot name="header">
                  This is the default tile!
                </slot>
              </div>
              <div class="one columns">
                <button
                  type="button"
                  class="btn-close one columns"
                  @click="close"
                  aria-label="Close modal">
                  x
                </button>
              </div>
            </div>
          </header>
          <section
            class="modal-body"
            id="modalDescription">
            <slot name="body">
              I'm the default body!
            </slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              I'm the default footer!
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    created () {
      document.addEventListener('keydown', this.escClose)
    },
    destroyed () {
      document.removeEventListener('keydown', this.escClose)
    },
    methods: {
      close() {
        this.$emit('close');
      },
      escClose(e) {
        if (e.keyCode === 27) this.close()
      }
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    background: #FFFFFF;
    margin: 0px auto;
    max-width: 75%;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
  }

  .modal-header {
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 0 20px;
    cursor: pointer;
    font-weight: bold;
    color: #999;
    background: transparent;
    vertical-align: top;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
