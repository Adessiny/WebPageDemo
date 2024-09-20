<template>
    <div>
        <div class="nav-wrap">
            <img src="../Curriculum/images/bookmark.svg" style="margin-left: 10px;">
            <div style="margin-left: 10px;margin-right: 50px;z-index: 999;">我的课程</div>
            <div @click="scrollToCourse" style="color: blue;cursor: pointer;z-index: 999;">Python系列课程</div>
            <div style="margin-left: 10px;margin-right: 10px;">丨</div>
            <img src="../Curriculum/images/more-course.svg">
            <div @click="scrollToMore" style="margin-left: 10px;z-index: 999;cursor: pointer;">更多课程</div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Curriculum',

        methods: {
            scrollToCourse() {
                window.scrollTo({
                    top: 450,
                    behavior: 'smooth'
                })
            },
            scrollToMore() {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }

    .nav-wrap{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 1000px;
        height: 48px;
        background-color: #f6f6fb;
        margin-left: 335px;
        padding: 10px 2px;
        margin-top: -120px;
    }
</style>