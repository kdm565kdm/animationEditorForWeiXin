//index.js
//获取应用实例
const app = getApp();






Page({
  onReady: function (e) {


  },
  data: {
    panelLock:{
      setOptionLock:false,
      TimeLapseOptionLock:false,
      VoiceOptionLock:false,
      KeyColorOptionLock:false,
      publishOptionLock:false,
      cameraOptionLock: true,
      PlayOptionLock: false,
    },
    
  },

  onLoad: function () { 
  },
  onShow:function(){
    this.onLoad()
  },

  showSetOption:function(){
    this.switchPanel("setOptionLock");
  },

  showTimelapseOption:function(){
    this.switchPanel("TimeLapseOptionLock");

  },

  showSoundOption:function(){
    this.switchPanel("VoiceOptionLock");
  },

  showKeyColorOption:function(){
    this.switchPanel("KeyColorOptionLock");
  },

  showPublishOption:function(){
    this.switchPanel("PublishOptionLock");
  },

  showCameraOption:function(){
    this.switchPanel("cameraOptionLock");
    this.TakePhoto();
  },
  TakePhoto:function(){
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {


        var src = res.tempImagePath;
        var idValue = Math.random();
        app.globalData.photos.push(src);
        console.log(app.globalData);
        // imgNum++;
        // var location1 = { id: idValue, path: src, num: imgNum };
        // ;
        // arr.push(location1);

        // this.setData({
        //   array: arr,
        // })

      },
    });
  },
  showPlayOption:function(){
    this.switchPanel("PlayOptionLock");
  },


  switchPanel:function(panelName){
    var panelName = panelName;
    for (var key in this.data.panelLock) {
      if (this.data.panelLock[key] == true && key.toString() != panelName) {
        var lock = "panelLock." + key.toString();
        this.setData({
          [lock]: false
        })
        break;
      }
    }
    var thisLock = "panelLock." + panelName;
    this.setData({
      [thisLock]: true
    })
  },

  error(e) {
    console.log(e.detail)
  },

})
