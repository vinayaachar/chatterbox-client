var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
  },


  renderMessage: function (message) {
    var htmlMessage = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text),
      roomname: _.escape(message.roomname),
    });
    $(htmlMessage).appendTo(MessagesView.$chats);
  }

};