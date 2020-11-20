var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', Rooms.add);
    RoomsView.$select.on('click', RoomsView.selectRoom);
    //create a prompt messsage to prompt user to input roomName
    //addRoom function, which calls renderRoom
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newRoomName = prompt('Enter new room name');
    //Rooms.rooms.add(_.escape(newRoomName));
    Rooms.rooms.push(_.escape(newRoomName));
    RoomsView.renderRoom(newRoomName);
    //var text = RoomsView.$button.find('input[type=text]').val();

    //FormView.$chats.prepend(htmlChat);
  },

  handleSelect: function (event) {
    //loop through Messages.results array to get Messages.results[i].roomName === room
      //roomText = Message.results[i]
      //pass into MessageView.render(Message.results[i])
    // var room = $('#rooms select option:selected').text().trim();

    // // FormView.$chats.empty();
    // for (i = 0; i < Messages.results.length; i ++) {
    //   var message = Messages.results[i];
    //   if (message.roomName === room) {
    //     var roomText = MessageView.render(message);
    //     FormView.$chats.prepend(roomText);
    //   }
    // }
  },

  selectRoom: function (event) {
    event.preventDefault();
    Rooms.selectedRoom = $('#rooms select option:selected').text().trim();
    FormView.$chats.empty();
    MessagesView.render();
  },


  render: function (room) {
    for (let room of Rooms.rooms) {
      RoomsView.renderRoom(room);
    }
    //for each room in Rooms Set,
    //render the room (RoomsView.renderRoom(room))
  },

  renderRoom: function (roomName) {
    var htmlRoom = RoomView.render({ room: roomName });
    $(htmlRoom).appendTo(RoomsView.$select);
  },



};


