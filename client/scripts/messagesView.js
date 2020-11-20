var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    var room = $('#rooms select option:selected').text().trim();

    // FormView.$chats.empty();
    //iterate through our results array
    //for each message object
    //create a new messageView
    for (i = 0; i < Messages.results.length; i ++) {
      var message = Messages.results[i];
      if (message.roomName === room) {
        var roomText = MessageView.render(message);
        FormView.$chats.prepend(roomText);
      }
    }

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