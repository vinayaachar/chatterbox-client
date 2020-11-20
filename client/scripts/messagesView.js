var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {

    MessagesView.$chats.empty();

    var messages;
    //need a way to filter messages to either all rooms
    if (Rooms.selectedRoom === 'All rooms') {
      messages = Messages.results;
    } else {
      //or messages filtered by roommname
      messages = Messages.results.filter((message) => {
        //gets unique messages roomname
        return !!message.roomname;
      }).filter((message) => {
        //filters unique messages to check if message's room
        //matches selected room
        return message.roomname.trim() === Rooms.selectedRoom.trim();
      });
    }
    //filter returns an array with all elements that passed our test
    //render each filtered message
    messages.forEach(MessagesView.renderMessage);



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