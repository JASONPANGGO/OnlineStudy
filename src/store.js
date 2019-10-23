import Vue from 'vue'

export let store = Vue.observable({
    appName: 'OnlineStudy',
    appLogo: 'el-icon-s-promotion',
    appSlogan: "Build intelligent apps of the future",
    themeColor:'rgb(0, 219, 110)',
    userinfo:{
        name:'JasonPang',
        account:'jason_pang@126.com',
        avatarUrl:'http://placehold.it/200x200',
        following:0,
        interests:['JavaScript','TypeScript','Vue','NodeJS']
    }
})

export let mutations = {

}