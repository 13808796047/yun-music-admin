
<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
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
          side="left"
          bordered
      >
        <q-list padding class="rounded-borders text-primary">
          <q-item
              clickable
              v-ripple
              v-for="item in menuRoutes"
              :key="item.meta.title"
              :active="item.name === route.name"
              @click="link = 'inbox'"
              active-class="menu-active"
              :to="item.path"
          >
            <q-item-section avatar>
              <q-icon :name="item.meta.icon" />
            </q-item-section>

            <q-item-section>{{ item.meta.title }}</q-item-section>
          </q-item>
        </q-list>
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
import {useRoute, useRouter} from "vue-router";
import {menuRoutes} from "../router/index.js";

export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    return {
      drawer: ref(false),
      nicknameFirstWord: computed(
          () => store.getters["user/nicknameFirstWord"]
      ),
     menuRoutes,
      route
    }
  }
}
</script>

<style lang="sass">
.menu-active
  color: white !important
  background: #1976D2
</style>