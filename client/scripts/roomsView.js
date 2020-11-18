var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },

  renderRoom: function (roomName) {
    var htmlRoom = RoomView.render({room: roomName});
    $(htmlRoom).appendTo(RoomsView.$select);
  }


};
