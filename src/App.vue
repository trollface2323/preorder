<template>
  <div>
      <nav class="navbar navbar-dark bg-primary" >
          <div class="container">
              <a class="navbar-brand"><i class="fab fa-accessible-icon"></i>МЕГА галерея</a>
              <ul class="nav justify-content-end" style="margin-left: 50px;">
                  <li class="nav-item">
                      <a class="nav-link link" href="#" @click="page = 'Main'">Главная</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link link" href="#" @click="page = 'Albums'">Альбомы</a>
                  </li><li class="nav-item">
                  <a class="nav-link link" href="#" @click="page = 'News'">Новости</a>
              </li>
                  <li class="nav-item">
                      <a class="nav-link link" href="#" @click="page = 'Authors'">Авторы</a>
                  </li>
              </ul>

              <form class="form-inline">
                  <input class="form-control mr-auto" type="search" placeholder="Search" aria-label="Search">
                  <button type="button" class="btn btn-outline-success ml-1" style="background: white;">Search</button>
              </form>
          </div>

      </nav>

<!--      Крошки-->

      <div class="container">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white">
                  <li class="breadcrumb-item"><a href="#">Галерея</a></li>
                  <li class="breadcrumb-item" v-if="page == 'Albums' || page == 'Photo'" @click="page = 'Albums'"><a href="#">Альбомы</a></li>
                  <li class="breadcrumb-item" v-if="page == 'Photo'" aria-current="page">Фото</li>
              </ol>
          </nav>

      </div>
      <Albums v-if="page == 'Albums'">

      </Albums>
<!--      <div class="container" v-if="page == 'Albums'">-->
<!--          <div class="col" >-->
<!--              <h2>Альбомы</h2>-->
<!--              -->
<!--    &lt;!&ndash;      Карточки &ndash;&gt;-->

<!--              <div class="row">-->
<!--                  <div class="col-4" v-for="item in albums" :key="item.link">-->
<!--                      <div class="card mb-4" style="width: 18rem;">-->
<!--                          <a @click="create_photo(item.id)"><img src="//via.placeholder.com/600/56a8c2" class="card-img-top bg-cover" alt="Description" height="150px"></a>-->
<!--                          <div class="card-body shadow mb-2 bg-white rounded">-->
<!--                              <h5 class="card-title"></h5>-->
<!--                              <p class="card-text">{{item.title}}</p>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                  </div>-->
<!--    -->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->

<!--      Фото-->
    <Photos v-if="page == 'Photos'">

    </Photos>

<!--      <div class="container" v-if="page == 'Photo'">-->
<!--          <h2>Фото</h2>-->
<!--          <div class="row">-->
<!--              <div class="col-6" v-for="item in photos" :key="item.link">-->
<!--                  <div class="card mb-4" style="width: 500px">-->
<!--                      <img :src=item.url class="card-img-top bg-cover" alt="Description">-->
<!--                      <div class="card-body shadow mb-2 bg-white rounded">-->
<!--&lt;!&ndash;                          <h5 class="card-title"></h5>&ndash;&gt;-->
<!--                          <p class="card-text">{{item.title}}</p>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->

<!--          </div>-->
<!--      </div>-->

<!--      Главная-->

      <div class="container" v-if="page == 'Main'">
          <p> Типа главная страница</p>
      </div>

<!--      Новости-->

      <div class="container" v-if="page == 'News'">
          <p> Типа Новости</p>
      </div>

<!--      Авторы-->

      <div class="container" v-if="page == 'Authors'">
          <p> Типа Авторы </p>
      </div>

<!--      Кнопоки для альбомов -->
<!--      <div class="container" v-if="page == 'Albums'">-->
<!--          <div class="row justify-content-center">-->
<!--              <div class="col-4 ml-4 ">-->
<!--                  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">-->

<!--                      <div class="btn-group" role="group" aria-label="First group">-->
<!--                          <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_albums(1)">1</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_albums(2)">2</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_albums(3)">3</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_albums(4)">4</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_albums(5)">5</button>-->
<!--                          <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-right"></i></button>-->
<!--                      </div>-->

<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->

<!--      Кнопки для фото -->


<!--      <div class="container" v-if=" page == 'Photo'">-->
<!--          <div class="row justify-content-center">-->
<!--              <div class="col-4 ml-4 ">-->
<!--                  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">-->

<!--                      <div class="btn-group" role="group" aria-label="First group">-->
<!--                          <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_photos(1)">1</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_photos(2)">2</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_photos(3)">3</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_photos(4)">4</button>-->
<!--                          <button type="button" class="btn btn-secondary" @click="update_photos(5)">5</button>-->
<!--                          <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-right"></i></button>-->
<!--                      </div>-->

<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->


  </div>

</template>

<script>
import Albums from "./components/Albums.vue"
import Photos from "./components/Photos";

export default {
  name: 'App',
  components: {
      Photos,
      Albums
  },
    data() {
      return {

          page:'Photos',
          count_album: 9,
          count_photo: 4,
          json_albums: [],
          json_photos: [],
          albums: [],
          photos: [],
          photo_start_id:0,
      }
    },

    methods: {
        update_photos(page_number_photo) {
            for (let i = 0; i < this.count_photo; i++) {
                    this.photos[i].id = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].id;
                    this.photos[i].title = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].title;
                    this.photos[i].url = this.json_photos[this.photo_start_id + this.count_photo * (page_number_photo - 1) + i].url;
                    console.log(this.page_number_photo)
            }
        },

        update_albums(page_number) {
            // this.page_number = page_number;
            for (let i = 0; i < this.count_album; i++) {
                this.albums[i].id = this.json_albums[this.count_album * (page_number - 1) + i].id;
                this.albums[i].title = this.json_albums[this.count_album * (page_number - 1) + i].title;
            }
        },
        create_photo(album_id){
            this.page = 'Photo';
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
                    for (let i = 0; i < this.count_album; i++){
                        this.albums.push({
                            id: json[i].id,
                            title: json[i].title,
                        })
                    }

                    this.json_albums = json;
                });


            // подгружаю фото
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

<style>
    .link {
        color: white;
    }
    .link:hover {
         color: red;
     }
    .link:active{
        color: blue;
    }
    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 35%;
        background-color: #ecf1f5;
        position: relative;
    }
</style>-
