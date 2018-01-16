<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
    <router-link :to="{name: 'user', params: {id: 3}}" tag="li" active-class="active"><a>User 3</a></router-link>
    <router-link :to="{ name: 'form' }" tag="li" active-class="active"><a>Form</a></router-link>
    <router-link :to="{ name: 'http' }" tag="li" active-class="active"><a>HTTP</a></router-link>
  </ul>
</template>
