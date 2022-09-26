module.exports = {
  baseURL: 'https://h5.moutai519.com.cn/game/',
  cookie: process.env.MT_COOKIE || [
    'MT-Device-ID-Wap=557BEFD0-B7D0-4D2C-92AE-37931AD13379; MT-Token-Wap=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtdCIsImV4cCI6MTY2NjIyNzc5NywidXNlcklkIjoxMDk5NDUyMTUyLCJkZXZpY2VJZCI6IjU1N0JFRkQwLUI3RDAtNEQyQy05MkFFLTM3OTMxQUQxMzM3OSIsImlhdCI6MTY2MzYzNTc5N30.rK93MLYyXha78YbJv2mwPGFentK4lBGxbW19QkLIdSE; YX_SUPPORT_WEBP=1'
  ], // 小茅运 H5 页面请求 cookie
  deviceId: process.env.MT_DEVICEID || '557BEFD0-B7D0-4D2C-92AE-37931AD13379', // User-Agent 里的 deviceId 值
  bark: process.env.BARK || 'https://api.day.app/CH4NWJSmvnVPyuszuznik3/' // bark 推送地址
}
