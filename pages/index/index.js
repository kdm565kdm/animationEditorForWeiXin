//index.js
//获取应用实例

var test = require('test.js');





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
    info:{
      currentFrame: '12/106',
      currentTime: '1.0/10.0',
      fps:'12',
    },

    
  },

  onLoad: function () {
    test.test();
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
