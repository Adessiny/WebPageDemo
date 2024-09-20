<template>
    <div>
        <div class="big-box">
            <!-- <h1>已有课程</h1>
            <div @click="turnToPython()" class="card-box">
                <div class="cover-box">
                    <img src="../Courses/images/python.png" style="width: 450px;height: 210;margin-right: 20px;"> 
                </div>
                <div class="text-box">
                    <div class="subtitle-box">
                        <span>Python基础语法</span>
                    </div>
                    <div class="context-box">
                        <span>内涵Python语言相关的基础语法、书写规范以及基本概念教学课程，并附有内容相关的测试题集，题目类型包含选择题、判断题、程序填空题以及编程练习题。</span>
                    </div>
                </div>
            </div> -->
            <h1 style="margin-bottom: -300px;">可选课程</h1>
            <div @click="turnToC()" class="card-box">
                <div class="cover-box">
                    <img src="../Courses/images/c.png" style="width: 450px;height: 210;margin-right: 20px;">
                </div>
                <div class="text-box">
                    <div class="subtitle-box">
                        <span>C语言程序设计</span>
                    </div>
                    <div class="context-box">
                        <span>包含相关的基础知识讲解与介绍，配套的测试用习题与考试套题，题目类型包含选择题、判断题、程序填空题以及算法设计与编程题。</span>
                    </div>
                </div>
            </div>
            <div @click="turnToCpp()" class="card-box">
                <div class="cover-box">
                    <img src="../Courses/images/cpp.png" style="width: 450px;height: 210;margin-right: 20px;">
                </div>
                <div class="text-box">
                    <div class="subtitle-box">
                        <span>C++面向对象的程序设计</span>
                    </div>
                    <div class="context-box">
                        <span>本课程通过介绍基础的C++语言中相关的数据类型、控制结构、函数与指针等用法，讲解类和对象的定义与使用，强调对象的概念，藉由封装、继承和多态以实现代码的重用和扩展。</span>
                    </div>
                </div>
            </div>
            <div @click="turnToJava()" class="card-box">
                <div class="cover-box">
                    <img src="../Courses/images/java.png" style="width: 450px;height: 210;margin-right: 20px;">
                </div>
                <div class="text-box">
                    <div class="subtitle-box">
                        <span>Java从入门到项目实战</span>
                    </div>
                    <div class="context-box">
                        <span>本课程基于用户已有部分语言学习经验以及一定的编程水平开设，通过介绍Java语言相关的基础知识，引申至具体的项目开发以及工程实战。</span>
                    </div>
                </div>
            </div>
            <div @click="turnToVue()" class="card-box">
                <div class="cover-box">
                    <img src="../Courses/images/vue.png" style="width: 450px;height: 210;margin-right: 20px;">
                </div>
                <div class="text-box">
                    <div class="subtitle-box">
                        <span>Vue从入门到精通</span>
                    </div>
                    <div class="context-box">
                        <span>在用户已有相应的Html、JS以及CSS语言学习与使用经验的基础上，通过快速的讲解Vue相关基础知识以及高阶案例，引导用户迅速上手并且逐渐精进，直至能够独立制作Vue前端项目。</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Courses',
        methods: {
            turnToC(){
                const urlc = "https://www.bilibili.com/cheese/play/series8324?csource=Hp_searchresult&spm_id_from=333.337.0.0";
                window.open(urlc, '_blank')
            },
            turnToCpp(){
                const urlcpp = "https://www.bilibili.com/cheese/play/ss23191?csource=Hp_searchresult&spm_id_from=333.337.0.0";
                window.open(urlcpp, '_blank')
            },
            turnToJava(){
                const urljava = "https://www.bilibili.com/cheese/play/ss236?csource=Hp_searchresult&spm_id_from=333.337.0.0";
                window.open(urljava, '_blank')
            },
            turnToVue(){
                const urlvue = "https://www.bilibili.com/cheese/play/ss2185?csource=Hp_searchresult&spm_id_from=333.337.0.0";
                window.open(urlvue, '_blank')
            }
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }

    .big-box{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 1800px;
        margin-top: -100px;
        margin-left: 200px;
        margin-right: 200px;
        background-color: #f2f2f7;
        border-radius: 12px;
        padding: 40px 22px 0 80px;
        .card-box{
            display: flex;
            margin-left: 15px;
            width: 1025px;
            border-radius: 8px;
            padding: 20px;
            background-color: #f6f6fb;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            .cover-box{
                width: 800px;
                height: 250px;
                margin-top: 30px;
                border-radius: 10px;
            }
            .text-box{
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-left: 50px;
                margin-right: 50px;
                .subtitle-box{
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                .context-box{
                    font-size: 20px;
                }
            }
        }
        .card-box:hover,.card-box:focus,.card-box:active{
            box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
</style>