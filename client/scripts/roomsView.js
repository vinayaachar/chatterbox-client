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

  allRooms: function(messages) {
    //allRooms function for app.js access
    var results = {};

    for (let message of messages) {
      //iterate through inputted data.results
      let roomname = message.roomname;
      //create roomnames from data input
      if (!results[roomname] && roomname !== undefined) {
        results[roomname] = roomname;
      }
    }
    //return all the rooms to store in Rooms.rooms
    return Object.keys(results);
  },


  selectRoom: function (event) {
    event.preventDefault();
    Rooms.selectedRoom = $('#rooms select option:selected').text().trim();

    MessagesView.render();
  },


  render: function (room) {
    //for apps.js data, need to render each room contained in Rooms.rooms
    for (let room of Rooms.rooms) {
      RoomsView.renderRoom(room);
    }
    //for each room in Rooms Set,
    //render the room (RoomsView.renderRoom(room))
  },

  renderRoom: function (room) {
    //rendered room data from .render
    //add to select drop down
    var renderedRoom = RoomView.render({
      room
    });
    RoomsView.$select.append(renderedRoom);
  },



};


