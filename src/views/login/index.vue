<template>
    <div class="login-container">
        <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on" 
        label-position="left"
        >
            <el-form-item prop="username">
                <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="用户名"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
                />
            </el-form-item>
            <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
        />
      </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive } from "vue";

const validateUsername = ()=>{
    
}

const loginForm = reactive({
    username: '',
    password: ''
})
const loginRules = reactive({
    username: [{trigger: 'blur', validator: validateUsername }],
    password: [{trigger: 'blur', validator: validatePassword }]

})

</script>

<style>
    .login-container {

    }
</style>