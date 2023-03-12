<template>
    <div class="container-fluid mt-3">
        <div class="d-flex justify-content-between mb-2">
            <h3>Danh sách vai trò</h3>
            
            <div class="text-center">
                <button type="button" class="btn btn-primary" @click="handleAddNew()">
                    <i class="bi bi-plus-lg"></i>
                    Thêm mới
                </button>
            </div>
        </div>

        <div class="card shadow-sm">
            <div class="card-header">
                <div class="form-outline">
                    <input type="text" class="form-control form-control-sm" placeholder="Tìm kiếm"/>
                </div>
            </div>
            <div class="card-body p-0">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50px">#</th>
                            <th scope="col" width="150px">Mã vai trò</th>
                            <th scope="col" width="300px">Tên vai trò</th>
                            <th scope="col" min-width="100px">Mô tả</th>
                            <th scope="col" width="100px"> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(role, index) in roles" :key="role.id" @click="handleEdit(role.id)">
                            <th scope="row"> {{ index + 1 }}</th>
                            <td>{{ role.code }}</td>
                            <td>{{ role.name }}</td>
                            <td>{{ role.description }}</td>
                            <td>
                                <button class="btn btn-outline-primary border-0 btn-sm me-2">
                                    <i class="bi bi-pen"></i>
                                </button>

                                <button class="btn btn-outline-danger border-0 btn-sm" @click.stop="handleDelete(role.id)">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import roleService from '@/services/role-service'

export default {
    name: 'RolesPage',
    data() {
        return {
            roles: []
        }
    },
    created() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.roles = roleService.getAll();
        },

        handleAddNew() {
            //this.$router.push({ name: 'role_detail_create' })
            this.$router.push({ name: 'role_detail_create' })
        },
        handleEdit(id){
            this.$router.push({ name: 'role_detail', params: { id: id } });
        },
        handleDelete(id) {
            let role = this.roles.find(x => x.id == id)
            if (role) {
                if (confirm('Xác nhận xóa vai trò ' + role.code) == true) {
                    if (roleService.delete(id)) {
                        this.getAll();
                    }
                }   
            }
        }
    }
}
</script>

<style scoped>
table {
    table-layout: fixed;
}
td {
  white-space: nowrap;
}
</style>