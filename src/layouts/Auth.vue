<template>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">tmp_PRODUCT_NAME</a>

            <button type="button" class="navbar-toggler" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSystem" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hệ thống</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownSystem">
                            <li><a class="dropdown-item" href="#">Giao diện</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Vài trò và quyền hạn</a></li>
                            <li><a class="dropdown-item" href="#">Quản lý người dùng</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Tùy chọn</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownDictionary" role="button" data-bs-toggle="dropdown" aria-expanded="false">Danh mục</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownDictionary">
                            <li><a class="dropdown-item" href="#">Chi nhánh</a></li>
                            <!-- <li><hr class="dropdown-divider"></li> -->
                            <!-- <li><a class="dropdown-item" href="#">Quản lý người dùng</a></li> -->
                            <!-- <li><a class="dropdown-item" href="#">Vài trò và quyền hạn</a></li> -->
                            <!-- <li><hr class="dropdown-divider"></li> -->
                            <!-- <li><a class="dropdown-item" href="#">Tùy chọn</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBusiness" role="button" data-bs-toggle="dropdown" aria-expanded="false">Chứng từ</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownBusiness">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Báo cáo</a></li>
                </ul>

                <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/logo.png" class="rounded-circle" height="25" alt="The logo" loading="lazy"/>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li><a class="dropdown-item" href="#">Thông tin tài khoản</a></li>
                            <!-- <li><a class="dropdown-item" href="#">Cài đặt</a></li> -->
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <slot></slot>
</template>

<script>

export default {
    name: "AuthLayout",
    methods: {},
    components: 
    {  

    }
}
</script>

<style scoped>
.dropdown-menu {
  margin: 0 !important;
}
</style>