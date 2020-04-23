<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 ml-4 ">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>
                        <button type="button" class="btn btn-secondary" @click="update(1)">1</button>
                        <button type="button" class="btn btn-secondary" @click="update(2)">2</button>
                        <button type="button" class="btn btn-secondary" @click="update(3)">3</button>
                        <button type="button" class="btn btn-secondary" @click="update(4)">4</button>
                        <button type="button" class="btn btn-secondary" @click="update(5)">5</button>
                        <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-right"></i></button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "buttons",
        props:{
        },

        data(){
            return{
                count:0,
                array:[],
                photo_start_id:0,
            }
        },

        methods: {
            update(page_number_photo) {

                for (let i = 0; i < this.count; i++) {
                    this.array[i].id = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].id;
                    this.array[i].title = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].title;
                    this.array[i].url = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].url;
                }
            },
        }
    }
</script>

<style scoped>

</style>