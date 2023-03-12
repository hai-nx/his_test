<template>
    <div class="container mt-3 his-bg">
        <h1>Vai trò</h1>
        <button class="btn btn-outline-primary" @click="handleClose()">
            Quay lại
        </button>

        <button type="submit" class="btn btn-md btn-primary me-2" style="padding-left: 2.5rem; padding-right: 2.5rem;">Lưu</button>
                    <button type="submit" class="btn btn-md btn-primary me-2" style="padding-left: 2.5rem; padding-right: 2.5rem;">Lưu & thêm mới</button>
                    <button type="button" class="btn btn-md btn-outline-danger" style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="handleCancel">Hủy</button>


        <form @submit.prevent="handleSave()">
            <div class="card shadow-sm mb-3">
                <div class="card-header">
                    Thông tin chung
                </div>

                <div class="card-body">
                    
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example1">Mã</label>
                            <input type="text" 
                                id="form3Example1" 
                                class="form-control form-control-md"
                                v-model="role.code" 
                                />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example2">Tên</label>
                            <input type="text" 
                                id="form3Example2" 
                                class="form-control form-control-md"
                                v-model="role.name" 
                                />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3">Mô tả</label>
                            <input type="text" 
                                id="form3Example3" 
                                class="form-control form-control-md"
                                v-model="role.description" 
                                />
                        </div>


                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" v-model="role.isActive" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Ngừng sử dụng
                                </label>
                            </div>
                        </div>
                
                    
                </div>

                
            </div>

            <div class="card shodow-sm mb-3">
                <div class="card-header">
                    Phân quyền chi tiết
                </div>
                <div class="card-body">
                    <ul id="myUL">
                        <li><span class="caret">Beverages</span>
                            <ul class="nested">
                                <li>Water</li>
                                <li>Coffee</li>
                                <li><span class="caret">Tea</span>
                                    <ul class="nested">
                                        <li>Black Tea</li>
                                        <li>White Tea</li>
                                        <li><span class="caret">Green Tea</span>
                                            <ul class="nested">
                                                <li>Sencha</li>
                                                <li>Gyokuro</li>
                                                <li>Matcha</li>
                                                <li>Pi Lo Chun</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import roleService from '@/services/role-service'

export default {
    name: "RoleDetail",
    data() {
        return {
            role: {},
            action: ""
        };
    },
    created() {
        if (this.$route.params.id) {
            let id = this.$route.params.id;
            
            if (id)
                this.getById(id);
        }
    },
    methods: {
        getById(id) {
            this.role = roleService.getById(id);
        },
        handleSave() {
            roleService.createOrEdit(this.role);
            this.handleClose();
        },
        handleCancel() {
            // kiểm tra dữ liệu thay đổi
            // - nếu thay đổi thì đưa ra cảnh báo với người dùng
            // - nếu ko thì chuyển về màn danh sách
            this.handleClose();
        },
        handleClose() {
            this.$router.push({ name: "role" });
        }
    }
}
</script>

<style>
.card-header {
    font-weight: 500;
}
</style>