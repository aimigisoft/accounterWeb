export const APPCONFIG = {
    Post: {
        addUrl: 'http://localhost:9090/api/Post/add',
        updateUrl: 'http://localhost:9090/api/Post/update',
        deleteUrl: 'http://localhost:9090/api/Post/delete',
        getUrl:'http://localhost:9090/api/Post/get',
        getListUrl: 'http://localhost:9090/api/Post/getlist',
        getListPageUrl: 'http://localhost:9090/api/Post/getlistpage',
        //getHotListUrl:'http://localhost:9090/api/Post/GetHotRank',
        getHotListUrl:'mock-data/blog/bloglist.json',
        getSummaryListUrl:'mock-data/home-blog-summary-list.json'
    },
    User:{
        loginUrl:'http://localhost:9090/api/token',
        registerUrl:'http://localhost:9090/api/User/register',
        addUrl: 'http://localhost:9090/api/User/add',
        updateUrl: 'http://localhost:9090/api/User/update',
        deleteUrl: 'http://localhost:9090/api/User/delete',
        getUrl:'http://localhost:9090/api/User/get',
        getListUrl: 'http://localhost:9090/api/User/getlist',
        getListPageUrl: 'http://localhost:9090/api/User/getlistpage',
    }
}