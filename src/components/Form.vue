<template>
    <div>
        <input type="text" placeholder="Input Username" @keyup.enter="addUsername">
        <!-- <input type="submit" v-on:click="addUsername"> -->
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    name: 'Form',
    methods: {
        addUsername(e){
            this.$store.commit('addUsername', e.target.value)
        }
    }
}
</script>