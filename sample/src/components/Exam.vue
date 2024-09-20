<template>
    <div>
        <div class="floating-window-box" @click.self="close">
            <div class="content-box">
                <span @click="setSelectionInvisable('0')" class="close-button">X</span>
                
                <div v-if="questions.length > 0"> <!-- 检查数据库表是否为空 -->
                    <div class="question-item">
                        <p style="margin-left: 40px;margin-top: 40px;">{{ currentQuestion.id }}、{{ currentQuestion.title }}</p>
                        <ul style="margin-left: 25px;">
                            <li style="list-style: none;">
                                <label class="option-label">
                                    <input type="radio" name="options" :value="currentQuestion.optionA" v-model="selectedOption" style="margin-left: 2px;margin-right: 10px;"/>
                                    {{ currentQuestion.optionA }}
                                </label>
                            </li>
                            <li style="list-style: none;">
                                <label class="option-label">
                                    <input type="radio" name="options" :value="currentQuestion.optionB" v-model="selectedOption" style="margin-left: 2px;margin-right: 10px;"/>
                                    {{ currentQuestion.optionB }}
                                </label>
                            </li>
                            <li style="list-style: none;">
                                <label class="option-label">
                                    <input type="radio" name="options" :value="currentQuestion.optionC" v-model="selectedOption" style="margin-left: 2px;margin-right: 10px;"/>
                                    {{ currentQuestion.optionC }}
                                </label>
                            </li>
                            <li style="list-style: none;">
                                <label class="option-label">
                                    <input type="radio" name="options" :value="currentQuestion.optionD" v-model="selectedOption" style="margin-left: 2px;margin-right: 10px;"/>
                                    {{ currentQuestion.optionD }}
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="navigation-buttons">
                        <button @click="previousQuestion" v-if="currentQuestionIndex > 0 && !isFinished" style="display: inline-block;margin-left: 80px;width: 60px;height: 33px;border: 0;border-radius: 8px;cursor: pointer;">上一题</button>
                        <button @click="nextQuestion" v-if="currentQuestionIndex < questions.length - 1 && selectedOption" style="display: inline-block;margin-left: 80px;width: 60px;height: 33px;border: 0;border-radius: 8px;cursor: pointer;">下一题</button>
                        <button @click="finishQuiz" v-if="currentQuestionIndex === questions.length - 1 && selectedOption && !isFinished"style="display: inline-block;margin-left: 80px;width: 60px;height: 33px;border: 0;border-radius: 8px;cursor: pointer;">完成答题</button>
                    </div>
                    <div v-if="isFinished" style="margin-top: 20px;margin-left: 200px;">
                        <p>答题完成！你的得分是：{{ score }}</p>
                        <button @click="restartQuiz" style="display: inline-block;margin-top: 10px;margin-left: 65px;width: 60px;height: 33px;border: 0;border-radius: 8px;cursor: pointer;">重新开始</button>
                    </div>
                </div>

                <div v-else>
                    <p>尚未获取任何题目数据。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Exam',
        props: {
            sendData: {
                type: String,
                Required: true
            }
        },
        data() {
            return {
                questions: [],
                currentQuestionIndex: 0,
                selectedOption: '',
                score: 0,
                isFinished: false
            };
        },

        computed: {
            currentQuestion() {
                return this.questions[this.currentQuestionIndex] || {};
            }
        },

        mounted() {
            this.fetchData();
        },

        methods: {
            setSelectionInvisable(int){
                let data = { showSelectionsOut:int };
                this.$emit('showSelections', data)
                console.log("已调用",data)
            },

            async fetchData() {
                if(this.sendData == '2'){
                    try {
                        let result = await get('GET', 'getPython');
                        this.questions = result || [];
                        this.currentQuestionIndex = 0;
                        this.selectedOption = '';
                        this.score = 0;
                        this.isFinished = false;
                    } catch (error) {
                        console.error('获取数据失败:', error);
                    }
                }
                else if(this.sendData == '3'){
                    try {
                        let result = await get('GET', 'getC');
                        this.questions = result || [];
                        this.currentQuestionIndex = 0;
                        this.selectedOption = '';
                        this.score = 0;
                        this.isFinished = false;
                    } catch (error) {
                        console.error('获取数据失败:', error);
                    }
                }
                else if(this.sendData == '4'){
                    try {
                        let result = await get('GET', 'getCpp');
                        this.questions = result || [];
                        this.currentQuestionIndex = 0;
                        this.selectedOption = '';
                        this.score = 0;
                        this.isFinished = false;
                    } catch (error) {
                        console.error('获取数据失败:', error);
                    }
                }
                else if(this.sendData == '5'){
                    try {
                        let result = await get('GET', 'getJava');
                        this.questions = result || [];
                        this.currentQuestionIndex = 0;
                        this.selectedOption = '';
                        this.score = 0;
                        this.isFinished = false;
                    } catch (error) {
                        console.error('获取数据失败:', error);
                    }
                }
                else if(this.sendData == '6'){
                    try {
                        let result = await get('GET', 'getVue');
                        this.questions = result || [];
                        this.currentQuestionIndex = 0;
                        this.selectedOption = '';
                        this.score = 0;
                        this.isFinished = false;
                    } catch (error) {
                        console.error('获取数据失败:', error);
                    }
                }
            },

            nextQuestion() {
                this.checkAnswer();
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.currentQuestionIndex++;
                    this.selectedOption = '';
                }
            },

            previousQuestion() {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.selectedOption = '';
                }
            },

            finishQuiz() {
                this.checkAnswer();
                this.isFinished = true;
            },

            checkAnswer() {
                if (this.selectedOption === this.getCorrectOptionContent(this.currentQuestion.correct_option)) {
                    this.score++;
                }
            },

            getCorrectOptionContent(correctOption) {
                switch (correctOption) {
                    case 'A':
                        return this.currentQuestion.optionA;
                    case 'B':
                        return this.currentQuestion.optionB;
                    case 'C':
                        return this.currentQuestion.optionC;
                    case 'D':
                        return this.currentQuestion.optionD;
                    default:
                        return '';
                }
            },

            restartQuiz() {
                this.fetchData();
            }
        },
    }

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


</script>

<style lang="less">
    *{
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
        height: 400px;
        width: 600px;
        z-index: 10001;
    }
    .question-item{
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 15px;
        margin-right: 15px;
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
    .option-label {
        display: flex;
        align-items: center;
        text-align: center;
        text-overflow: ellipsis;
        margin: 15px;
    }
    .navigation-buttons {
        margin-top: 20px;
        position: absolute;
    }
</style>
