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

      <!--         Альбомы -->

      <Albums v-if="page == 'Albums'"
      @page="page_update">

      </Albums>



<!--      Фото-->
    <Photos v-if="page == 'Photos'" :photo_start_id="this.photo_start_id">

    </Photos>

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
        page_update(page){
           this.page = page
        }
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
