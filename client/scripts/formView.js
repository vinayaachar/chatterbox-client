var FormView = {

  $form: $('form'),

  $chats: $('#chats'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(event.currentTarget);
    var text = FormView.$form.find('input[type=text]').val();

    var message = {
      username: App.username,
      text: _.escape(text),
    };

    var successCallback = function () {
      console.log('Successfully created ', message);
      App.fetch();
    };

    Parse.create(message, successCallback);
    console.log('click!');
    var htmlChat = MessageView.render(message);
    FormView.$chats.prepend(htmlChat);
  },



  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};