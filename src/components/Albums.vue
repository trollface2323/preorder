<template>
    <div class="container">
                  <div class="col" >
                      <h2>Альбомы</h2>

            <!--      Карточки -->

                      <div class="row">
                          <div class="col-4" v-for="item in albums" :key="item.link">
                              <div class="card mb-4" style="width: 18rem;">
                                  <a @click="create_photo(item.id)"><img src="//via.placeholder.com/600/56a8c2" class="card-img-top bg-cover" alt="Description" height="150px"></a>
                                  <div class="card-body shadow mb-2 bg-white rounded">
                                      <h5 class="card-title"></h5>
                                      <p class="card-text">{{item.title}}</p>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
        <Buttons v-bind:count="count_album"
                 v-bind:array="albums">

        </Buttons>

    </div>
</template>

<script>
    import Buttons from "./Buttons";

export default {
    name: "Albums",
    components:{
        Buttons
    },

    props:{
        page_number: Number,
    },

    data() {
        return {
            count_album: 9,
            albums: [],
            json_albums: [],
            photo_start_id:0,

        }
    },

    methods:{

        update_albums(page_number) {
            for (let i = 0; i < this.count_album; i++) {
                this.albums[i].id = this.json_albums[this.count_album * (page_number - 1) + i].id;
                this.albums[i].title = this.json_albums[this.count_album * (page_number - 1) + i].title;
            }
        },

        create_photo(album_id){
            this.page = 'Photos';
            this.photo_start_id = 50 * (album_id -1);
            this.photos = [];
            for (let i = 0; i < 4; i++){
                this.photos.push({
                    id:0,
                    title:'',
                    url:''
                });

                this.photos[i].id = this.json_photos[i+50*(album_id-1)].id;
                this.photos[i].title = this.json_photos[i+50*(album_id-1)].title;
                this.photos[i].url = this.json_photos[i+50*(album_id-1)].url;
            }
        },
    },

    mounted() {
        // подгружаю альбомы

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                for (let i = 0; i < this.count_album; i++) {
                    this.albums.push({
                        id: json[i].id,
                        title: json[i].title,
                    })
                }

                this.json_albums = json;
            });
    }
}
</script>

<style scoped>

</style>