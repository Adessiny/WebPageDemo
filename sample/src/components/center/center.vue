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
                    <div class="user-status" @click="toggleDropdown">
                        <img @click="showUserHere(true)" :src="id === '0' ? require('../center/images/avatar.png') : require('../center/images/doggy.jpg')" class="avatar">
                        <div v-if="dropdownVisible" class="dropdown">
                            <div @click="logOut()" class="dropdown-item">退出登录</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="../center/images/header.jpg" class="hd">
        <img src="../center/images/cover.png" class="bg-cover">
    
        <Recruit @showSelections="showSelections" :sendData="{ isSelectionVisable, course, id, name }" v-if="currentView === 'center'"/>
        <Curriculum v-if="currentView === 'center'"/>
        <Grid v-if="currentView === 'center'"/>
        <Recommend @changeView="showComponent2" :sendData="currentView" v-if="currentView === 'center'"/>
        <Courses v-if="currentView === 'Courses'"/>
        <User @showUser="showUser" @whosLogged="whosLogged" @userCourse="userCourse" @userName="userName" :sendData="{ isUserVisable, id, course, name }" v-if="isUserVisable"/>
        <!-- 选择题库 -->
        <Selection @showSelections="showSelections" @changeCourse="changeCourse" :sendData="{ isSelectionVisable, id, course }" v-if="isSelectionVisable === '1'"/>
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
            id: '0',
            name: '未登录',
            course: '0',
            dropdownVisible: false,
        };
    },

    methods: {
        toggleDropdown() {
            if (this.id != '0') { this.dropdownVisible = !this.dropdownVisible; }
        },
        logOut() {
            this.id = '0';
            this.course = '0';
            this.name = '未登录';
            this.dropdownVisible = false
        },
        showComponent1(view) {
            this.currentView = view;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        showComponent2(data) {
            this.currentView = data.changingCurrentView;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        showSelections(data) {
            if (this.id !== '0') { this.isSelectionVisable = String(data.showSelectionsOut); }
            else { this.showUserHere(true) }
        },
        showUserHere(bool) {
            if (this.id == '0') {
                this.isUserVisable = bool;
            }
        },
        showUser(data) { this.isUserVisable = data.showUserOut },
        whosLogged(data) { this.id = String(data.id) },
        userCourse(data) { this.course = String(data.course) },
        userName(data) { this.name = String(data.name) },
        changeCourse(data) { this.course = String(data.course) }
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
                img.avatar{
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
    .dropdown 
    {
        position: absolute;
        top: 40px; // 调整气泡位置
        right: -18px;
        width: 85px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1000; // 确保在上层
    }
    .dropdown::after {
        content: '';
        position: absolute;
        top: -20px; // 调整尖尖位置
        right: 35px; // 尖尖的水平位置
        border-width: 10px; // 尖尖大小
        border-style: solid;
        border-color: transparent transparent white transparent; // 尖尖颜色
    }
    .dropdown-item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        cursor: pointer;
    }
</style>