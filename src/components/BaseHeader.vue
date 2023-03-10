<template>
  <header class="fixed-top">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-2">
                <figure>
                    <img src="../assets/img/logo.png" alt="boolgram" />
                </figure>
            </div>
            <div class="col-2 text-center">
                <input class="text-center" id="search-bar" type="text" placeholder="cerca">
            </div>
            <div class="col-2 d-flex justify-content-between">
                <div></div>
                <div>
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-heart" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-house-chimney" />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <div class="profile-pic">
                            <img src="../assets/img/profile.jpg" alt="profile-picture">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'BaseHeader',
}
</script>

<style>
</style>