<template>
    <div>
        <div class="subject-wrap">
            <div class="subject-title">基础语法
                <div class="app-card-wrap">
                    <div @click="turnToPython()" class="app-card">
                        <div class="card-wrap">
                            <div class="app-cover">
                                <img src="../Grid/images/python.png" style="width: 186px;height: 186px;">
                                <!-- <div class="cover-tag">最近学习</div> -->
                            </div>
                            <div class="card-content">
                                <div class="app-title2">
                                    <span class="title-text" style="line-height: 28px;margin-left: 30px;">Python基础语法</span>
                                    <div class="title-text2" style="white-space: normal;">本课程以阶段性的形式提供Python语言的基本用法以及其使用规范，教授常用的Python相关功能，并提供相应的案例以供学习与加深印象。</div>
                                    <!-- <div class="title-text3" style="display: flex;">
                                        <div style="width: 200px;height: 10px;background-color: crimson;margin-left: 30px;margin-top: 60px;"></div>
                                        <div style="width: 200px;height: 10px;margin-left: 10px;margin-top: 50px;">100%</div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Grid',
        methods: {
            turnToPython(){
                const url = "https://www.bilibili.com/cheese/play/series341?csource=Hp_searchresult&spm_id_from=333.337.0.0";
                window.open(url, '_blank')
            },
            setExamsVisable(bool){
                let data = {showExamsOut:bool};
                this.$emit('showExams', data)
            }
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .subject-wrap{
        display: flex;
        align-items: center;
        background-color: #f2f2f7;
        border-radius: 8px;
        padding: 16px 22px 0 22px;
        width: 980px;
        height: 318px;
        margin-top: 10px;
        margin-left: 315px;
        .subject-title{
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            margin-top: -20px;
            margin-bottom: 16px;
            margin-left: 35px;
        }
        .app-card-wrap{
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            .app-card{
                position: relative;
                width: 600px;
                height: 208px;
                background-color: #f6f6fb;
                border-radius: 12px;
                cursor: pointer;
                .card-wrap{
                    display: flex;
                    padding: 18px;
                }
                .app-cover{
                    width: 180px;
                    height: 140px;
                    margin-right: 24px;
                    border-radius: 10px;
                    // .cover-tag{
                    //     position: absolute;
                    //     left: 0;
                    //     bottom: 0;
                    //     margin-left: 7px;
                    //     margin-bottom: 7px;
                    //     padding: 4px,12px;
                    //     background-color: rgba(255, 196, 106, 0.9);
                    //     border-radius: 4px;
                    //     line-height: 20px;
                    //     font-weight: 600;
                    //     color: white;
                    //     font-size: 13px;
                    // }
                }
                .card-content{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 8px 0 0;
                    height: 148px;
                }
            }
        }
    }
    .title-text2{
        font-size: 12px;
        line-height: 17px;
        color: rgba(17, 18, 67, 0.5);
        margin-left: 30px;
        margin-top: 15px;
        margin-right: 20px;
        .title-text3{
            display: flex;
            align-items: center;
        }
    }
</style>