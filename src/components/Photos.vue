<template>
    <div class="container">
        <h2>Фото</h2>
        <div class="row">
            <div class="col-6" v-for="item in photos" :key="item.link">
                <div class="card mb-4" style="width: 500px">
                    <img :src=item.url class="card-img-top bg-cover" alt="Description">
                    <div class="card-body shadow mb-2 bg-white rounded">
                        <p class="card-text">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <Buttons v-bind:count="count_photo"
                 v-bind:array="photos">

        </Buttons>
    </div>
</template>

<script>
    import Buttons from "./Buttons";

    export default {
        name: "Photos",

        components:{
            Buttons
        },

        data(){
            return {
                photos:[],
                json_photos:[],
                count_photo: 4,

            }
        },

        methods:{

        },

        mounted() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => {
                    for (let i = 0; i < this.count_photo; i++){
                        this.photos.push({
                            id: json[i].id,
                            url: json[i].url,
                            title: json[i].title,
                        })
                    }

                    this.json_photos = json;
                })
        }
    }
</script>

<style scoped>

</style>