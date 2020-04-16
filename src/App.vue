<template>
  <div class="container">
      <nav class="navbar navbar-light bg-primary">
         <a class="navbar-brand"><i class="fab fa-accessible-icon"></i>МЕГА галерея</a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Альбомы</a>
                    </li><li class="nav-item">
                        <a class="nav-link">Новости</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Авторы</a>
                    </li>
                </ul>

          <form>
              <input type="search" placeholder="Search" >
              <button type="submit">Search</button>
          </form>
      </nav>
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item">Главная</li>
              <li class="breadcrumb-item active" aria-current="page">Альбомы</li>
          </ol>
      </nav>

      <div class="col">
          <h2>Альбомы</h2>
      </div>

      <div class="w-100"></div>

<!--      Первый ряд-->
      <div class="row">
          <div class="col-4">
              <div class="card" style="width: 18rem;">
<!--                  <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
<!--                                    <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
<!--                                    <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>

<!--          Второй ряд-->

          <div class="col-4">
              <div class="card" style="width: 18rem;">
                  <!--                  <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
                  <!--                                    <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
                  <!--                                    <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>

<!--          Третий ряд-->

          <div class="col-4">
              <div class="card" style="width: 18rem;">
                  <!--                  <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
                  <!--                                    <img src="..." class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
          <div class="col-4">
              <div class="card" style="width: 18rem;">
<!--                                                      <img src="" class="card-img-top" alt="...">-->
                  <div class="card-body shadow mb-2 bg-white rounded">
                      <h5 class="card-title">Название карточки</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </div>
          </div>
    <div class="row justify-content-center">
      <div class="col-auto">
          <div class="btn-toolbar row justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
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
 {{ array }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
    data() {
      return {
          array: {}
      }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.array = json)
    }
}
</script>

<style>
</style>
