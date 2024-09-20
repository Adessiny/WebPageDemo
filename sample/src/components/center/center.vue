<template>
    <div>
        <div class="header">
            <div class="header-wrap">
                <div class="left-panel">
                    <div class="logo click-disabled">
                        <img src="../center/images/logo.png" style="height: 30px;margin-top: 5px;">
                    </div>
                    <div class="menu-bar">
                        <div class="menu-item">
                            <span @click="showComponent1('center')" class="main-title">首页</span>
                            <span class="main-title">  丨  </span>
                            <span @click="showComponent1('Courses')" class="main-title">集散中心</span>
                        </div>
                    </div>
                </div>
                <div class="func-wrapper">
                    <div class="user-status" @click="showAuthModal">
                        <img @click="showUserHere(true)" src="../center/images/doggy.jpg" class="avator">
                    </div>
                </div>
            </div>
        </div>
        <img src="../center/images/header.jpg" class="hd">
        <img src="../center/images/cover.png" class="bg-cover">
    
        <Recruit @showSelections="showSelections" :sendData="isSelectionVisable" v-if="currentView === 'center'"/>
        <Curriculum v-if="currentView === 'center'"/>
        <Grid v-if="currentView === 'center'"/>
        <Recommend @changeView="showComponent2" :sendData="currentView" v-if="currentView === 'center'"/>
        <Courses v-if="currentView === 'Courses'"/>
        <User @showUser="showUser" :sendData="isUserVisable" v-if="isUserVisable"/>
        <!-- 选择题库 -->
        <Selection @showSelections="showSelections" :sendData="isSelectionVisable" v-if="isSelectionVisable === '1'"/>
        <!-- 答题引入 -->
        <Exam @showSelections="showSelections" :sendData="isSelectionVisable" v-if="['2', '3', '4', '5', '6'].includes(isSelectionVisable)"/>
    </div>
</template>

<script>
import Recruit from "../Recruit/Recruit.vue";
import Curriculum from "../Curriculum/Curriculum.vue";
import Grid from "../Grid/Grid.vue";
import Recommend from "../Recommend/Recommend.vue";
import Courses from "../Courses/Courses.vue";
import Selection from "../Selection.vue";
import Exam from "../Exam.vue";
import User from "../User.vue";

export default {
    name: 'index',
    components: {
        Recruit,
        Curriculum,
        Grid,
        Recommend,
        Courses,
        User,
        Selection,
        Exam
    },
    data() {
        return {
            currentView: 'center',
            isUserVisable: false,
            isSelectionVisable: '0',
        };
    },

    methods: {
        showComponent1(view) {
            this.currentView = view;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log('页面值1:'+this.currentView);
        },
        showComponent2(data) {
            this.currentView = data.changingCurrentView;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log('页面值2:'+this.currentView);
        },
        showSelections(data) {
            this.isSelectionVisable = String(data.showSelectionsOut);
            console.log("这里也已运行",this.isSelectionVisable)
        },
        showUserHere(bool) {
            this.isUserVisable = bool;
            console.log("center已调用User", this.isUserVisable)
        },
        showUser(data) {
            this.isUserVisable = data.showUserOut;
            console.log("用户已回到center", this.isUserVisable)
        }
    }
};
</script>


<style lang="less">
    * {
        margin: 0;
        padding: 0;
        /*↑清除不同浏览器之间的样式差异↑*/
    }
    img.hd{
        width: 100%;
        max-width: 1920px;
        height: 100%;
        object-fit: cover;
    }
    img.bg-cover{
        position: relative;
        width: 100%;
        height: 120px;
        left: 0;
        bottom: 110px;
    }
    .header{
        display: flex;
        width: 100%;
        background-color: rgb(0, 170, 255);
        height: 40px;
        .header-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1128px;
            margin: 8px auto;
            .left-panel{
                display: flex;
                justify-content: flex-start;//左右居中 从开始往后弹性排列，优先插入弹性盒子后部
                align-items: center;//上下居中
                font-size: 16px;
                .logo click-disabled{
                    display: flex;
                    height: 30px;
                    font-size: 16px;
                    flex-flow: row nowrap;//横向不换行
                    align-items: center;
                    cursor: pointer;//鼠标变手指
                }
                .menu-bar{
                    display: flex;
                    margin-left: 14px;
                    cursor: pointer;
                    .menu-item{
                        display: flex;
                        height: 32px;
                        line-height: 32px;
                        margin: 0 24px;
                        position: relative;//绝对布局
                        .main-title{
                            display: flex;
                            font-weight: 500;
                            opacity: 1;
                            color: white;
                        }
                    }
                }
            }
            // .func-wrapper{
            //     position: relative;
            //     display: flex;
            //     align-items: center;
            //     z-index: 999;//图层，数值越大图层越靠上
            //     .user-msg-dropdown{
            //         position: relative;
            //     }
            //     img.more{
            //         width: 30px;
            //         height: 30px;
            //         margin-top: 5px;
            //         margin-right: -5px;
            //         opacity: 0.8;
            //         cursor: pointer;
            //     }
            //     .msg-preview-wrap{
            //         position: absolute;
            //         top: 40px;
            //         right: -22px;
            //         user-select: none;
            //         z-index: 9999;
            //     }
            // }
            .user-status{
                position: relative;
                display: flex;
                align-items: center;
                cursor: pointer;
                img.avator{
                    display: block;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    margin-right: 12px;
                    object-fit: fill;
                }
                .dropdown{
                    display: flex;
                    align-items: center;
                    height: 32px;
                }
            }
        }
    }
</style>