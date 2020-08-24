<template>
    <div class="home-container">
        <div class="home-content">
            <!--轮播层-->
            <div id="lunbo">
                <template>
                    <Carousel autoplay loop>
                        <CarouselItem>
                            <div id="lunbo1">轮播测试</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div id="lunbo2">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div id="lunbo3">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div id="lunbo4">4</div>
                        </CarouselItem>
                    </Carousel>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
}
#lunbo{
    height: 300px;
}
#lunbo1{
    height: 300px;
    width: auto;
    background-color: #00FF00;
}
#lunbo2{
    height: 300px;
    width: auto;
    background-color: #ffaa00;
}
#lunbo3{
    height: 300px;
    width: auto;
    background-color: #ff00ff;
}
#lunbo4{
    height: 300px;
    width: auto;
    background-color: #0000ff;
}
</style>
