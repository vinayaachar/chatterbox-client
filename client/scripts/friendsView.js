var Friends = {
  toggleStatus: function() {
    // returns true or false depending on a click event
    $(document).ready(function (event) {
      $('.username').on('click', function () {
        console.log('inside');
        var userName = event.currentTarget.innerTarget;
        Friends.friends.add(userName);
        return true;
      });
    });
  }


};