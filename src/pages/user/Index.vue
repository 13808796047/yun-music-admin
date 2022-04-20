<template>
  <div class="q-pa-md">
    <div class="q-my-md">
      <q-btn color="primary" label="添加用户" />
    </div>
    <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="name"
        hide-pagination
    />
    <div class="row justify-center q-mt-md">
      <q-pagination
          v-model="pagination.page"
          color="grey-8"
          :max="pagesNumber"
          size="sm"
      />
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {search} from "../../api/user.js";

const columns = [
  {
    field: 'id',
    label: 'ID',
  },
  {
    field: 'username',
    label: '用户名',
  },
  {
    field: 'nickname',
    label: '昵称',
  },
]
const fetchData = ()=>{
  search({page:0}).then(res=>{
    data.value = data.value.concat(res.content)
    pagination.value.page = res.number+1
    pagination.value.rowsPerPage = res.size
    pagination.value.rowsNumber = res.totalElements
  })
}
fetchData()

const data = ref([])
const pagination = ref({
  page: 2,
  rowsPerPage: 3,
  rowsNumber: 0,
})

export default {
  setup() {
    return {
      columns,
      data,
      pagination,
      // pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage))
    }
  }
}
</script>

<style scoped>

</style>