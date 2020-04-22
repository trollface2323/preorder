<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 ml-4 ">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>
                        <button type="button" class="btn btn-secondary" @click="update_photos(1)">1</button>
                        <button type="button" class="btn btn-secondary" @click="update_photos(2)">2</button>
                        <button type="button" class="btn btn-secondary" @click="update_photos(3)">3</button>
                        <button type="button" class="btn btn-secondary" @click="update_photos(4)">4</button>
                        <button type="button" class="btn btn-secondary" @click="update_photos(5)">5</button>
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
                count_photo: 4,

            }
        },

        methods: {
            update_photos(page_number_photo) {

                this.page_number_photo = page_number_photo;
                for (let i = 0; i < this.count_photo; i++) {
                    this.photos[i].id = this.json_photos[this.photo_start_id + this.count_photo * (this.page_number_photo - 1) + i].id;
                    this.photos[i].title = this.json_photos[this.photo_start_id + this.count_photo * (this.page_number_photo - 1) + i].title;
                    this.photos[i].url = this.json_photos[this.photo_start_id + this.count_photo * (this.page_number_photo - 1) + i].url;
                    console.log(this.page_number_photo)
                }
            },
        }
    }
</script>

<style scoped>

</style>