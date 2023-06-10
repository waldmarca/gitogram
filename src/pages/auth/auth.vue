<template>
  <div class="c-auth">
    <div class="auth-content">
      <div class="auth-logo">
        <icon name="logo" />
      </div>
      <div class="auth-info">
        <span class="auth-info-text">
          More than just one repository.
          <br>
          This is our digital world.
        </span>
      </div>
      <div class="auth-btn">
        <Xbutton @click="redirectToGhAuth">
          <span>Authorize with github</span>
          <span class="logo-icon"><icon name="gitLogo" /></span>
        </Xbutton>
      </div>
      <div class="auth-back">
        <icon name="authLogo" />
      </div>
    </div>
  </div>
</template>

<script>
import Xbutton from '../../components/button/button.vue'
import Icon from '../../icons/icon.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Xbutton,
    Icon
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserByCode(code)
      localStorage.setItem('token', token)
      this.$router.replace({ name: 'feeds' })
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
