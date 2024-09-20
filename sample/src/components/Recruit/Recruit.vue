        <template>
            <div>
                <!--第二个模块-->
                <div class="user-card" style="position: relative;"><!--&quot... ...&quot相当于“... ...”，是双引号的字符实体-->
                    <div class="card-wrap active-card-wrap">
                        <div class="festi-border">

                        </div>
                        <div class="left-content">
                            <div class="user-name">Admin</div>
                            <div class="sub-title">
                                <div class="sub-title-text">
                                    <div class="tag-picture"></div>
                                    <span class="ellipsis">Python基础语法-第一关(数据类型的转换)</span>
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
                props: ['sendData'],
                methods: {
                    setSelectionVisable(int){
                        let data = { showSelectionsOut:int };
                        this.$emit('showSelections', data)
                        console.log("已调用",data)
                    }
                }
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