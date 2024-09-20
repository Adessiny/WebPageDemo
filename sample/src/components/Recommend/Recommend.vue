<template>
    <div>
        <h3>为你推荐</h3>
        <div class="Flex">
            <div class="Recommend">
                <div @click="selectCourse('Courses')" class="pythonImg"><img src="../Recommend/images/c.png"></div>
                <div @click="selectCourse('Courses')" class="pythonImg"><img src="../Recommend/images/cpp.png"></div>
                <div @click="selectCourse('Courses')" class="pythonImg"><img src="../Recommend/images/java.png"></div>
                <div @click="selectCourse('Courses')" class="pythonImg"><img src="../Recommend/images/vue.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Recommend',
        props: ['sendData'],
        methods: {
            selectCourse(view) {
                let data = {
                    changingCurrentView: view
                };
                this.$emit('changeView',data)
            }
        }
    }
</script>

<style lang="less" scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h3{
        margin-left: 345px;
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .Flex{
        width: 100%;
        height: 600px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .Recommend{
            display: flex;
            margin-left: 15px;
            width: 1025px;
            border-radius: 8px;
            height: auto;
            padding: 20px;
            background-color: #f2f2f7;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            .pythonImg{
                width: 450px;
                height: 210px;
                margin-top: 30px;
                box-shadow: 0 2px 10px 0 rgb(56, 35, 219, 0.007);
                cursor: pointer;
                img{
                    width: 100%;
                    height: 100%;
                    transition: all .4s;//动画过渡效果
                }
                img:hover{
                    transform: scale(1.15);//变形动画
                }
            }
        }
    }
</style>