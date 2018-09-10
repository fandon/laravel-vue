<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    example

                        
                        <button @click="goto">12345</button>
                </div>
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
