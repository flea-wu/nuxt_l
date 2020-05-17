<template>
    <div class="xhs">
        <pre v-text="$attrs"/>
        {{ data }}
    </div>
</template>

<script>
    import axios from "axios";
    import md5 from "js-md5";

    export default {
        props: {},
        data() {
            return {
                data: {}
            }
        },
        head() { // 单独页面中控制SEO的文案
            return {
                title: '小红书数据,小红书数据分析平台,小红书KOL,小红书营销,小红书品牌,小红书竞品分析,小红书排行榜',
                meta: [{
                    hid: "description",
                    name: "description",
                    content: "小红书数据,小红书数据分析平台,小红书KOL,小红书营销,小红书品牌,小红书竞品分析,小红书排行榜"
                }, {
                    hid: 'viewport',
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0'
                }]
            }
        },
        async asyncData() {
            let timestamp = Date.now();
            let token = md5("WP$O&NB!H@UBIU!1UTBNNLOPGRA&T$!21YTY" + "souxiu" + timestamp + "WP$O&NB!H@UBIU!1UTBNNLOPGRA&T$!21YTY");
            let url = "https://souxiu.cn/api/kol/cooperator?timestamp=" + timestamp
                + "&appsecret=souxiu&token=" + token + "&logintoken=d88c046a12370b66aeea9357bb7e99f4&uid=2737" +
                "&username=马叉虫&add_uid=2737&add_username=马叉虫&pagesize=20&page=1&sort_type=&sort=&category=" +
                "&fans_start=&fans_end=&picture_price_start=&picture_price_end=&video_price_start=&video_price_end=" +
                "&inter_per_start=&inter_per_end=&fans_per_start=&fans_per_end=&district=&mcn_userid=&exact="
            return await axios.get(url)
                .then(res => {
                    return {data: res.data}
                }).catch(reason => {
                    console.log(reason)
                })
        }
    };
</script>
