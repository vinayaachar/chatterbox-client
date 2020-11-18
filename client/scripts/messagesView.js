var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
  },


  renderMessage: function (message) {
    var htmlMessage = MessageView.render({
      username: _.escape(message.username),
      text: _.escape(message.text)
    });
    $(htmlMessage).appendTo(MessagesView.$chats);
  }

};