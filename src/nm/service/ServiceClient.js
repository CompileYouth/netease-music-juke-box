const NM_API = "http://music.163.com/api";

export default class ServiceClient {
    getUserPlayLists(uid = "40652589") {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API}/user/playlist/`
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            }).then((res) => {
                if (res.code === 200) {
                    resolve(res.playlist);
                }
                else {
                    reject("Error " + res.code);
                }
            });
        });
    }

    getPlayListDetail(id = 4000000) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API}/playlist/detail/`
                data: {
                    id
                }
            }).then((res) => {
                if (res.code === 200) {
                    resolve(res);
                }
                else {
                    reject("Error " + res.code);
                }
            });
        });
    }

}
