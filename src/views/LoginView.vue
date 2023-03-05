<template>
<div id="big-bg">
  <div id="header">
<!--<h1>123123</h1>-->
  </div>
  <div id="main" >
    <div id="m_side">
      <h1>123123</h1>
    </div>
    <el-collapse-transition>
      <div id="m_login" v-show="signInUp">
        <span class="_signUp">no account? <a href="" @click.prevent="signInUp = !signInUp">sign up</a></span>
        <h1>Sign In</h1>
        <el-form-item id="elForm">
          <el-col :span="18">
            <h4>input your id</h4>
            <el-input type="num" v-model="loginForm.id"></el-input>
            <div id="_password">
              <h4>input your password</h4>
              <span >
              <el-icon v-if="showPassword"><View /></el-icon>
              <el-icon v-if="!showPassword"><Hide /></el-icon>
              <a href="" @click.prevent="showPassword = !showPassword">{{showPassword?'hide':'show'}}</a>
            </span>
            </div>
            <el-input :type="showPassword?'num':'password'" v-model="loginForm.password"></el-input>
          </el-col>
        </el-form-item>
        <el-button  @click="login">Sign in</el-button>
      </div>

    </el-collapse-transition>
    <transition name="el-fade-in-linear">
      <div id="m_sign" v-show="!signInUp">
        <span class="_signUp">have account? <a href="" @click.prevent="signInUp = !signInUp">sign in</a></span>
        <h1>Sign Up</h1>
        <el-form-item id="elForm">
          <el-col :span="18">
            <h4>input your id</h4>
            <el-input type="num" v-model="signForm.id"></el-input>
            <div id="_password">
              <h4>input your password</h4>
              <span >
                <el-icon v-if="showPassword"><View /></el-icon>
                <el-icon v-if="!showPassword"><Hide /></el-icon>
                <a href="" @click.prevent="showPassword = !showPassword">{{showPassword?'hide':'show'}}</a>
              </span>
            </div>
            <el-input :type="showPassword?'num':'password'" v-model="signForm.password"></el-input>
            <h4>confirm your password</h4>
            <el-input :type="showPassword?'num':'password'" v-model="signForm.confirmPassword"></el-input>
          </el-col>
        </el-form-item>
        <span id="signUt_to_signIn">
          <el-button  @click="signUp">Sign Up</el-button>
          <p v-show="signUp_ED">to  <a href="" @click.prevent="signInUp = !signInUp">sign in</a></p>
        </span>

      </div>

    </transition>

  </div>


</div>
</template>

<script setup>

import {ref} from "vue";
import router from "@/router";
import {$login} from "@/net";

const showPassword = ref(true)
const signInUp = ref(false)
const signUp_ED = ref(false)

const initLogForm = {
  id:'',
  password:''
}
const loginForm = ref({
  id:'',
  password:''
})
const signForm = ref({
  id:'',
  password:'',
  confirmPassword:''
})

function login(){
  $login().then(()=>{

    // router.push({name:'esriMap'})
    // router.push({path:'/map'})
    router.push({path:'/selfArcWms'})

    loginForm.value = initLogForm
  })
}

function signUp(){
   signUp_ED.value = !signUp_ED.value
}
</script>

<style scoped lang="less">
#big-bg{
  width: 1920px;
  height: 960px;
  background-image: url("src/assets/1.jpg");
  #header{
    height: 320px;
    width: 1920px;
    margin: auto;
    h1{
      color: white;
      font-size: 100px;
      margin-left: 200px;
    }
  }
  #main{
    height: 640px;
    width: 1580px;
    overflow: hidden;
    border-radius: 24px 24px 0 0 ;
    margin: auto;
    display: flex;
    flex-direction: row;
    background-color:white;
    position: relative;
    #m_side{
      height: 100%;
      width: 50%;
      overflow: hidden;
      margin: 1px 0 0 1px;
      border-radius: 24px 0 0 0 ;
      background-image: url("src/assets/2.jpg");
      background-size: 1000px;
      h1{
        color: white;
        font-size: 100px;
        margin-left: 200px;
      }
    }
    #m_login{
      width: 50%;
      height: 100%;
      padding-left: 75px;
      padding-top:50px;
      :first-child{
        font-size: 20px;
      }
      ._signUp{
        margin-left: 450px;
      }
      h1{
        margin-top: 100px;
        font-family: -apple-system;
      }
      h4{
        margin-top: 10px;
      }
      #elForm{
        /deep/ .el-input__inner{//深度覆盖elementUI原有样式
          height: 40px;
        }
        #_password{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          span{
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            height: 24px;
            a{
              width: 43px;
              padding-left: 10px;
              font-size: 15px;
              align-self: flex-end;
              color: #606266;
            }
          }
        }
      }
      button{
        //margin-left: 30px;
        width: 20%;
        height: 10%;
        border-radius: 24px;
      }
    }
    #m_sign{
      position: absolute;
      margin-left: 50%;
      width: 50%;
      height: 100%;
      padding-left: 75px;
      padding-top:50px;
      :first-child{
        font-size: 20px;
      }
      ._signUp{
        margin-left: 450px;
      }
      h1{
        margin-top: 70px;
        font-family: -apple-system;
      }
      h4{
        margin-top: 10px;
      }
      #elForm{
        /deep/ .el-input__inner{//深度覆盖elementUI原有样式
          height: 40px;
        }
        #_password{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          span{
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            height: 24px;
            a{
              width: 43px;
              padding-left: 10px;
              font-size: 15px;
              align-self: flex-end;
              color: #606266;
            }
          }
        }
      }
      #signUt_to_signIn{
        display: flex;
        flex-direction: row;
        font-size: 20px;
        p{
          display: block;
          height: 30px;
          padding-top: 17px;
          padding-left: 30px;
        }

      }
      button{
        //margin-left: 30px;
        width: 200px;
        height: 50px;
        border-radius: 24px;
      }
    }
  }

}
</style>