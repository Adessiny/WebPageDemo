<template>
    <div>
        <div class="floating-window-box" @click.self="close">
            <div class="content-box">
                <span @click="setSelectionInvisable('0')" class="close-button">X</span>
                <div class="dropdown">
                    <span style="display: flex;align-items: center;justify-content: center;font-size: 18px;font-weight: 700;margin-top: 70px;margin-bottom: 5px;margin-left: 248px;">选择语言：</span>
                    <div class="dropdown-toggle" @click="toggleDropdown" style="margin-left: 237px;">{{ selectedOption }}
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <ul class="dropdown-menu" v-show="isOpen" style="margin-left: 250px;">
                        <li v-for="option in options" :key="option.value" @click="selectOption(option)">{{ option.label }}</li>
                    </ul>
                    <button @click="chooseCourse()" v-if="selectedOption != ''" style="display: inline-block;margin-left: 247px;margin-top: 20px;width: 80px;height: 40px;border: 0;border-radius: 8px;cursor: pointer;">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: ['sendData'],
        data() {
            return {
                isOpen: false,
                selectedOption: '',
                options: [
                    { value: 1, label: 'Python' },
                    { value: 2, label: 'C语言'},
                    { value: 3, label: 'C++'},
                    { value: 4, label: 'Java'},
                    { value: 5, label: 'Vue'}
                ],
            }
        },
        methods:{
            setSelectionInvisable(int) {
                let data = { showSelectionsOut:int };
                this.$emit('showSelections', data)
            },
            toggleDropdown(){
                this.isOpen = !this.isOpen;
            },
            selectOption(option){
                this.selectedOption = option.label;
                this.isOpen = false;
            },
            chooseCourse(){
                let a = '0'
                switch (this.selectedOption){
                    case 'Python' : 
                        a = '2'
                        break;
                    case 'C语言' : 
                        a = '3'
                        break;
                    case 'C++' : 
                        a = '4'
                        break;
                    case 'Java' : 
                        a = '5'
                        break;
                    case 'Vue' :
                        a = '6'
                        break;
                }
                let data = { showSelectionsOut:a };
                this.$emit('showSelections', data)
            }
        },
    }
</script>

<style scoped>
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
    .dropdown {
        position: relative;
        display: inline-block;
        align-items: center;
    }
    .dropdown-toggle {
        display: flex;
        justify-content: center;
        width: 80px;
        height: 20px;
        cursor: pointer;
        padding: 10px;
        background-color: #eee;
        border-radius: 5px;
        margin-left: 238px;
    }
    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .dropdown-menu li {
        padding: 10px;
        cursor: pointer;
    }
    .dropdown-menu li:hover {
        background-color: #f5f5f5;
    }
</style>