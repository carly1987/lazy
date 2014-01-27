module.exports = function(webot) {
  webot.set('hi', function(){
    return ["你好!!33","侬好22"];
  });

  var reg_help = /^(help|\?)$/i;
  webot.set({
    // name 和 description 都不是必须的
    name: 'hello help',
    description: '获取使用帮助，发送 help',
    pattern: function(info) {
      //首次关注时,会收到subscribe event
      return info.is('event') && info.param.event === 'subscribe' || reg_help.test(info.text);
    },
    handler: function(info){
      var reply = {
        title: '感谢你收听carly32',
        pic: 'http://lazyer.duapp.com/assets/img/getqrcode.jpg',
        url: 'http://lazyer.duapp.com/',
        description: [
          "这个是32用来开发的，目前正在开发懒人记账本"
        ].join('\n')
      };
      // 返回值如果是list，则回复图文消息列表
      return reply;
    }
  });
}