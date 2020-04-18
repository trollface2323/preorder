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
      <div class="container" v-if="page == 'Albums'">
          <div class="col" >
              <h2>Альбомы</h2>


    <!--      Карточки -->

          <div class="row">
              <div class="col-4" v-for="item in albums" :key="item.link">
                  <div class="card mb-4" style="width: 18rem;">
                      <a @click="page = 'Photo'"><img src="//via.placeholder.com/600/56a8c2" class="card-img-top bg-cover" alt="Description" height="150px"></a>
                      <div class="card-body shadow mb-2 bg-white rounded">
                          <h5 class="card-title"></h5>
                          <p class="card-text">{{item.title}}</p>
                      </div>
                  </div>
              </div>

          </div>
          </div>
      </div>

<!--      Фото-->

      <div class="container" v-if="page == 'Photo'">
          <h2>Фото</h2>
          <div class="row">
              <div class="col-6" v-for="item in photos" :key="item.link">
                  <div class="card mb-4" style="width: 18rem;">
                      <img src="//via.placeholder.com/600/56a8c2" class="card-img-top bg-cover" alt="Description" width="500px">
                      <div class="card-body shadow mb-2 bg-white rounded">
<!--                          <h5 class="card-title"></h5>-->
                          <p class="card-text">{{item.title}}</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>

      <div class="container" v-if="page == 'Main'">
          <p> Типа главная страница</p>
      </div>

      <div class="container" v-if="page == 'News'">
          <p> Типа Новости</p>
      </div>

      <div class="container" v-if="page == 'Authors'">
          <p> Типа Авторы </p>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4 ml-4 ">
              <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                          <div class="btn-group" role="group" aria-label="First group">
                              <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>
                              <button type="button" class="btn btn-secondary">1</button>
                              <button type="button" class="btn btn-secondary">2</button>
                              <button type="button" class="btn btn-secondary">3</button>
                              <button type="button" class="btn btn-secondary">4</button>
                              <button type="button" class="btn btn-secondary">5</button>
                              <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-right"></i></button>
                          </div>

              </div>
          </div>
        </div>
      </div>

  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
    data() {
      return {
          albums: [
              {
                  id:0,
                  title: '',
              },
          ],
          photos:[
              {
                  id:1,
                  title:"ppppp",

              }
          ],
          page:'Albums',
      }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                json.forEach((v) => {
                    this.albums.push({id: v.id, title: v.title});
                })
            })
        // fetch('https://jsonplaceholder.typicode.com/photos')
        //     .then(response => response.json())
        //     .then(json => {
        //         json.forEach((v) => {
        //                 this.photos.push({id: v.id, title: v.title})
        //         })
        //     })
        // for (let i = 0; i < 9; i++)
        // {
        //     this.albums.push({id:i, title:i});
        // }
    },
    methods(){

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
</style>
