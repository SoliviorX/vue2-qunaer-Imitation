<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!--把li标签换成router-link标签，加上一个tag="li"属性，防止它被渲染成a标签样式，再动态绑定一个 :to="..."-->
            <!--加入1像素底边框，只需加入boder-bottom类，因为styles中加入了1像素解决方案库-->
            <router-link 
                tag="li"
                class="item boder-bottom" 
                v-for="item of list" 
                :key="item.id"
                :to="'/detail/' + item.id"
            >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background #eee
        text-indent: .2rem
    .item
        overflow: hidden
        height: 1.9rem
        display: flex
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0   //必须加这一条下面的ellipsis()效果才不会出bug
            .item-title
                line-height: .54rem
                font-size: .32rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background #d66317
                padding: 0 .2rem
                border-radius: .06rem
                color: #fff
</style>
