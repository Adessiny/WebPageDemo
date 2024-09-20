<template>
    <div>
        <div class="floating-window-box" @click.self="close">
            <div class="content-box">
                <span @click="setUserInvisable(false)" class="close-button">X</span>
                <div class="loggin-box">
                    <h3 style="font-size: 24px;">{{ isRegister ? '注册' : '登录' }}</h3>
                    <div class="loggin-content">
                        <div class="text">
                            <span>账户：</span>
                            <input v-model="Account" placeholder="请输入账户" class="input-filed"/>
                        </div>
                        <div class="text">
                            <span>密码：</span>
                            <input type="password" v-model="Password" placeholder="请输入密码" class="input-filed"/>
                        </div>
                        <button @click="handleSubmit" style="margin-top: 25px;margin-left: 90px;width: 85px;height: 35px;border: 0;border-radius: 8px;cursor: pointer;">{{ isRegister ? '注册' : '登录' }}</button>
                        <div v-if="errorMessage" class="error-message" style="margin-left: 60px;margin-top: 15px;">{{ errorMessage }}</div>
                        <div class="toggle">
                            <span @click="toggleMode" style="bottom: 0;right: 0;margin-bottom: 15px;margin-right: 20px;position: absolute;">{{ isRegister ? '已有账户？点击登录' : '没有账户？点击注册' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'User',
        props: ['sendData'],
        data() {
            return {
                Account: '',
                Password: '',
                errorMessage: '',
                isRegister: false // 默认登录模式
            };
        },
        methods: {
            setUserInvisable(bool) {
                let data = { showUserOut: bool };
                this.$emit('showUser', data);
            },
            toggleMode() {
                this.isRegister = !this.isRegister; // 切换模式
                this.errorMessage = ''; // 清除错误消息
                this.Account = ''; // 清空输入框
                this.Password = '';
            },
            handleSubmit() {
                this.errorMessage = '';

                if (!this.Account || !this.Password) {
                    this.errorMessage = '账户和密码不能为空';
                    return;
                }

                if (this.isRegister) {
                    // 注册逻辑
                    this.register(this.Account, this.Password).then(response => {
                        // 处理注册成功的逻辑
                    }).catch(error => {
                        this.errorMessage = '注册失败，请重试';
                    });
                } else {
                    // 登录逻辑
                    this.login(this.Account, this.Password).then(response => {
                        // 处理登录成功的逻辑
                    }).catch(error => {
                        this.errorMessage = '登录失败，请检查账户和密码';
                    });
                }
            },
            close() {
                this.setUserInvisable(false);
            }
        }
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .floating-window-box {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    .content-box {
        background: white;
        padding: 20px;
        border-radius: 5px;
        position: relative;
        height: 300px; /* 自适应高度 */
        width: 450px; /* 可根据需要调整 */
        z-index: 10001;
        .loggin-box{
            margin-top: 20px;
            margin-left: 35px;
            .loggin-content{
                margin-top: 40px;
                margin-left: 60px;
                    .text{
                    margin-top: 20px;
                    margin-left: 25px;
                }
            }
        }
           
    }
    .close-button {
        display: flex;
        justify-content: center;
        position: absolute;
        width: 15px;
        top: 15px;
        right: 20px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }
    .error-message {
        color: red;
        margin-top: 10px;
    }
    .input-filed{
        border: none;
        outline: none;
        padding: 8px;
    }
    .input-filed:focus{
        border-bottom: 1px solid #60606b;
    }
    .toggle {
        margin-top: 15px;
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }
</style>
