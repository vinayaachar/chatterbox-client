var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    FriendsView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {

      // examine the response from the server request:
      //store data in our Messages variable
      Messages = data;
      console.log(data);
      console.log('Response: ', Messages);
      //render all messages
      MessagesView.render();
      //render all rooms from Messages data (.roomname)
      Rooms.rooms = RoomsView.allRooms(Messages.results);
      RoomsView.render();


      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
