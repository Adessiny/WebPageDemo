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
                        <div v-if="errorMessage" class="error-message" style="bottom: 0;right: 0;margin-bottom: 50px;margin-right: 20px;position: absolute;">{{ errorMessage }}</div>
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
        props: {
            sendData: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                Assigned: 0, // 标记登录状态
                id: '0',
                User: [],
                Account: '',
                Password: '',
                Course: 0,
                Length: 0,
                errorMessage: '',
                isRegister: false // 默认登录模式
            };
        },
        methods: {
            setUserInvisable(bool) {
                let data = { showUserOut: bool };
                this.$emit('showUser', data);
            },
            whosLogged(data) { this.$emit('whosLogged', { id: data }) },
            userCourse(data) { this.$emit('userCourse', { course: data }) },
            userName(data) { this.$emit('userName', { name: data }) },
            toggleMode() {
                this.isRegister = !this.isRegister; // 切换模式
                this.errorMessage = ''; // 清除错误消息
                this.Account = ''; // 清空输入框
                this.Password = '';
            },
            async handleSubmit() {
                this.errorMessage = '';

                if (!this.Account || !this.Password) {
                    this.errorMessage = '账户和密码不能为空';
                    return;
                }

                if (this.isRegister) {
                    // 注册逻辑
                    try {
                        let result1 = await get('Get', 'getUser');
                        this.User = result1 || [];
                        this.Length = this.User.length;
                        for(let i = 0; i < this.Length; i++) {
                            if(this.Account == String(this.User[i].username)) {
                                this.errorMessage = '用户名已存在';
                                return;
                            }
                        }
                        post('Post', 'insertUser', { id: this.Length+1, username: this.Account, password: this.Password })
                            .then(response => { console.log("数据已发出", response) })
                                .catch(error => { console.log(error) })
                        this.errorMessage = '注册成功！点击下方登录'
                        return
                    } catch (error) {
                        console.error('数据发送失败', error);
                    }
                } else {
                    // 登录逻辑
                    try {
                        let result = await get('Get', 'getUser');
                        this.User = result || [];
                        for (let i=0; i<this.User.length; i++) {
                            if(this.Account == String(this.User[i].username) && this.Password == String(this.User[i].password)) {
                                this.whosLogged(this.User[i].id);
                                this.userCourse(this.User[i].course);
                                this.userName(this.User[i].username);
                                this.Assigned = 1;
                                this.setUserInvisable(false)
                                return
                            }
                        }
                        this.errorMessage = '账号或密码错误'
                    } catch (error) {
                        console.error('获取数据失败', error);
                    }
                }
            },
            close() {
                this.setUserInvisable(false);
            }
        }
    };
    // 使用promise对ajax封装，减少代码量
    // get请求
    function get(method, path) { // method决定是GET还是POST还是UPDATE等等，path决定取哪个数据库的内容
        return new Promise((resolve, reject) => {
            let getContents = new XMLHttpRequest();
            getContents.open(method, `http://127.0.0.1:8000/${path}`);// 本地服务器的地址+
            getContents.send(); // 把请求发送到上述路径上，由server.js中相应的函数监听并处理
            getContents.onreadystatechange = () => {
                // 0请求未初始化，没有调用open()；1请求已建立但没有调用send()发送；2请求已发送，正在处理；3请求处理中，响应的部分数据可用，未全部完成；4响应已完成，可以获取并使用服务器的响应。
                if (getContents.readyState === 4) {
                    // status为200时代表HTTP请求响应成功
                    if (getContents.status === 200) {
                        resolve(JSON.parse(getContents.response)); // 解析响应并return
                    } else {
                        reject(new Error('请求失败'));
                    }
                }
            };
        });
    }

    // post请求
    function post(method, path, data) { // method决定请求类型，path是请求的路径，data是要发送的数据
        return new Promise((resolve, reject) => {
            let postContents = new XMLHttpRequest();
            postContents.open(method, `http://127.0.0.1:8000/${path}`);
            postContents.setRequestHeader("Content-Type", "application/json"); // 设置请求头为JSON格式
            postContents.send(JSON.stringify(data)); // 将数据转换为JSON字符串并发送
            postContents.onreadystatechange = () => {
                if (postContents.readyState === 4) {
                    if (postContents.status === 200) {
                        resolve(JSON.parse(postContents.response)); // 解析并返回响应
                    } else {
                        reject(new Error('请求失败'));
                    }
                }
            };
        });
    }

    //post用法：
    // post('POST', 'updateUser', { id: 1, course: 1 })
    // .then(response => {
    //     console.log(response); // 处理成功的响应
    // })
    // .catch(error => {
    //     console.error(error); // 处理错误
    // });


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
