<template>
    <div class="login-container">
       <el-form
        label-position="left"
        label-width="100px"
        :model="loginForm"
        :rules="loginRules"
        ref="Form"
        style="max-width: 460px"
        >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password"/>
            </el-form-item>
            <el-form-item>
                <el-button @click="login(Form)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import {validUsername} from '../../utils/validate'
import type { FormInstance } from 'element-plus'

const Form = ref<FormInstance>()

const validateUsername = (rule: any, value: any, callback: any)=>{
    if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
    }
}
const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'))
    } else {
    callback()
    }
}

const loginForm = reactive({
    username: '',
    password: ''
})
const loginRules = reactive({
    username: [{trigger: 'blur', validator: validateUsername }],
    password: [{trigger: 'blur', validator: validatePassword }]

})

const login = function (formEl) {
    if(!formEl) return
    formEl.validate((valid)=>{
        if(valid) {
            
        } else {
            console.log('someting error!!');
        }
    })
}

</script>

<style>
    .login-container {
        position: absolute;
        top: 40%;
        left: 50%;
    }
</style>