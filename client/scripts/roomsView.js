var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', RoomsView.handleSubmit);
    RoomsView.$select.on('click', RoomsView.handleSelect);
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


