<template>
    <div class="tb">
        <pre v-text="$attrs"/>
        {{ data }}
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: {},
        data() {
            return {}
        },
        head() { // 单独页面中控制SEO的文案
            return {
                title: '淘宝直播数据分析工具_淘宝直播大数据分析软件_淘宝直播达人数据',
                meta: [{
                    hid: "description",
                    name: "description",
                    content: "淘宝直播数据分析工具_淘宝直播大数据分析软件_淘宝直播达人数据，优质达人"
                }, {
                    hid: 'viewport',
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                }]
            }
        },
        async asyncData() {
            let url = "https://fans.weixin.udaren.com/v1/anchors/by?tag=category&category=%E6%98%8E%E6%98%9F&userId=";
            return await axios.get(url, {
                headers: {
                    "X-ACCESS-KEY": "23d2"
                }
            })
                .then(res => {
                    return {data: res.data}
                }).catch(reason => {
                    console.log(reason)
                })
        }
    };
</script>
