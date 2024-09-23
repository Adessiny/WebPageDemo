        <template>
            <div>
                <!--第二个模块-->
                <div class="user-card" style="position: relative;"><!--&quot... ...&quot相当于“... ...”，是双引号的字符实体-->
                    <div class="card-wrap active-card-wrap">
                        <div class="festi-border">

                        </div>
                        <div class="left-content">
                            <div class="user-name">{{ this.sendData.name }}</div>
                            <div class="sub-title">
                                <div class="sub-title-text">
                                    <div class="tag-picture"></div>
                                    <span class="ellipsis" v-if="this.sendData.course === '0'">还未开始学习哦</span>
                                    <span class="ellipsis" v-if="this.sendData.course === '1'">Python基础语法</span>
                                    <span class="ellipsis" v-if="this.sendData.course === '2'">C语言基础语法</span>
                                    <span class="ellipsis" v-if="this.sendData.course === '3'">C++面向对象的编程</span>
                                    <span class="ellipsis" v-if="this.sendData.course === '4'">Java从基础设计到项目开发</span>
                                    <span class="ellipsis" v-if="this.sendData.course === '5'">Vue从入门到精通</span>
                                </div>
                            </div>
                        </div>
                        <div class="right-content">
                            <div @click="setSelectionVisable('1')" class="guide-button" style="cursor: pointer;z-index: 999;">前去答题</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </template>

        <script>
            export default{
                //默认暴露 只能暴露一个
                //多个组件时分别暴露去掉default
                name: 'Recruit',
                props: {
                    sendData: {
                        type: Object,
                        required: true
                    }
                },

                data() {
                    return{
                        userCourse: '0',
                    };
                },

                mounted() {
                    this.getCourse();
                },

                watch: {
                    'sendData.id': function(newId, oldId) {
                        this.getCourse();
                    }
                },

                methods: {
                    setSelectionVisable(int){
                        let data = { showSelectionsOut:int };
                        this.$emit('showSelections', data)
                    },

                    async getCourse() {
                        let result = await get('Get', 'getUser');
                        this.User = result || [];
                        for (let i = 0; i<this.User.length; i++) {
                            if (this.sendData.id == this.User[i].id) {
                                this.userCourse = this.User[i].course;
                                return
                            }
                        }
                    }
                }
            }

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
        </script>

        <style lang="less">
            *{
                margin: 0;
                padding: 0;
            }
            .user-card .card-wrap{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 48px;
                height: 110px;
                background-color: white;
                border-radius: 16px;
                width: 60%;
                margin-left: 19%;
                bottom: 130px;
                .festi-border{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    margin-left: -48px;
                    z-index: 0;
                    
                }
                .left-content{
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    overflow: hidden;
                    flex-wrap: wrap;//默认nowrap(不换行)
                    z-index: 1;
                    .user-name{
                        margin-right: 20px;
                        max-width: 100%;
                        font-size: 26px;
                        line-height: 47px;
                        font-weight: 600;
                        color: rgb(0, 195, 255);
                    }
                    .sub-title{
                        position: relative;
                        display: flex;
                        max-width: 100%;
                        height: 50px;
                        align-items: center;
                        font-size: 18px;
                        color: gray;
                        .sub-title-text{
                            .tag-picture{
                                display: inline-block;
                                min-width: 90px;
                                height: 23px;
                                background-image: url(../Recruit/images/recent.png);
                                background-position-x: 50%;
                                background-size: 100%;
                                margin-right: 6px;
                                vertical-align: text-bottom;//文字底边线拉至box的底边
                                .ellipsis{
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    
                                }
                            }
                        }
                    }
                }
                .right-content{
                    display: flex;
                    align-items: center;
                    height: 112px;
                    margin-left: 24px;
                    .guide-button{
                        width: 200px;
                        height: 48px;
                        margin: 15px;
                        border-radius: 23px;
                        font-size: 18px;
                        color: white;
                        background-color: #41a6ef;
                        text-align: center;
                        line-height: 48px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
            }
        </style>