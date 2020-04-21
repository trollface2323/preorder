<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 ml-4 ">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-left"></i></button>
                        <button type="button" class="btn btn-secondary" @click="update(1)">1</button>
                        <button type="button" class="btn btn-secondary" @click="update(2)">2</button>
                        <button type="button" class="btn btn-secondary">3</button>
                        <button type="button" class="btn btn-secondary">4</button>
                        <button type="button" class="btn btn-secondary">5</button>
                        <button type="button" class="btn btn-secondary"><i class="fas fa-arrow-right"></i></button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "buttons"
    }
</script>

<style scoped>

</style>