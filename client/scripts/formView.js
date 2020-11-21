var FormView = {

  $form: $('form'),

  $chats: $('#chats'),
  // roomView.js
  // 1. Choose a room (store the room name in temp var)
  //$('chats').empty()
  // pull msg's belonging to that room and create the page
  // 2. Render page for that room with messages belonging to that room (from msg.js)
  // Form File
  //1. Create messages -> store them in message.js
  // { roomName1: [chat1, chat2] }
  //need to store what room the message is created in
  //2. Prepend msg to the body
  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = FormView.$form.find('input[type=text]').val();
    var room = $('#rooms select option:selected').text().trim();

    var message = {
      username: App.username,
      text: _.escape(text),
      roomName: _.escape(room)
    };

    var successCallback = function () {
      console.log('Successfully created ', message);
      App.fetch();
    };

    Parse.create(message, successCallback);
    var htmlChat = MessageView.render(message);
    FormView.$chats.prepend(htmlChat);
  },



  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};