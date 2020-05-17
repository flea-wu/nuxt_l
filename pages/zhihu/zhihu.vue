<template>
    <div class="zhihu">
        <pre v-text="$attrs"/>
        {{ data }}
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        props: {},
        head() { // 单独页面中控制SEO的文案
            return {
                title: '知乎社区管理团队官方专栏，不定期更新社区管理工作相关的最新消息。',
                meta: [{
                    hid: "description",
                    name: "description",
                    content: "知乎社区管理团队官方专栏，不定期更新社区管理工作相关的最新消息。"
                }, {
                    hid: 'viewport',
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                }]
            }
        },
        data() {
            return {}
        },
        async asyncData() {
            return await axios.get("https://zhuanlan.zhihu.com/api/columns/zhihuadmin")
                .then(res => {
                    return {data: res.data}
                }).catch(reason => {
                    console.log(reason)
                })
        }
    };
</script>
