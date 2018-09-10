<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    

                    <router-view></router-view>
                </div>
                <button @click='goto'></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goto: function () {
                this.$router.push({path: 'demo'});
            }
        }
    }
</script>
