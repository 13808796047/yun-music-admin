
<template>
    <q-layout view="lHh Lpr lff"  class="rounded-borders">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>云音乐盒管理后台{{ nicknameFirstWord }}</q-toolbar-title>
          <q-space />
          <q-avatar color="teal" text-color="white"
          >{{ nicknameFirstWord }}
          </q-avatar>
        </q-toolbar>
      </q-header>

      <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-center bg-transparent">
            <q-avatar color="teal" text-color="white"
            >{{ nicknameFirstWord }}
            </q-avatar>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <q-page padding>
            <q-breadcrumbs>
              <q-breadcrumbs-el icon="home" to="/" />
              <q-breadcrumbs-el label="Docs" icon="widgets" to="/start/pick-quasar-flavour" />
              <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" />
              <q-breadcrumbs-el label="Build" icon="build" />
            </q-breadcrumbs>
          <router-view></router-view>
        </q-page>


      </q-page-container>
    </q-layout>
</template>

<script>
import {computed, ref} from "vue"
import {useStore} from "vuex"

export default {
  setup () {
    const store = useStore()
    return {
      drawer: ref(false),
      nicknameFirstWord: computed(
          () => store.getters.nicknameFirstWord
      ),
    }
  }
}
</script>

<style scoped>

</style>