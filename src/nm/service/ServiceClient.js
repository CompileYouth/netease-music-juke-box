const NM_API_URL = "/api";

export default class ServiceClient
{
    constructor() {
        this._userId = null;
    }

    get userId() {
        return this._userId;
    }

    login() {
        return this.__pseudoLogin();
    }

    __pseudoLogin() {
        return new Promise((resolve, reject) => {
            this._userId = "40652589";
            resolve();
        });
    }

    getUserPlayLists(uid = this.userId)
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/user/playlist/`,
                data: {
                    uid,
                    limit: 1000,
                    offset: 0
                }
            }).then(res => {
                if (res.code === 200)
                {
                    resolve(res.playlist);
                }
                else
                {
                    reject("Response with error code: " + res.code);
                }
            }, reject);
        });
    }

    getPlayListDetail(id)
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${NM_API_URL}/playlist/detail`,
                data: {
                    id
                }
            }).then(res => {
                if (res.code === 200)
                {
                    resolve(res.result);
                }
                else
                {
                    reject("Response with error code: " + res.code);
                }
            }, reject);
        });
    }
}


let __instance = null;
ServiceClient.getInstance = function()
{
    if (__instance === null)
    {
        __instance = new ServiceClient();
    }
    return __instance;
};
