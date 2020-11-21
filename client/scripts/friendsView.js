var FriendsView = {

  initialize: function () {
    $('#chats').on('click', Friends.toggleStatus);
  },

  toggleStatus: function (event) {
    // returns true or false depending on a click event
    event.preventDefault();
    var userName = event.target.innerText;
    console.log(userName);
    if (Friends.friends.has(userName)) {
      console.log('Removing ' + userName + ' from friends.');
      MessagesView.unhighlightFriends();
      Friends.friends.delete(userName);
    } else {
      console.log('Adding ' + userName + ' to friends.');
      Friends.friends.add(userName);
      MessagesView.highlightFriends();
    }
    return true;
    //Friends.renderFriends(this)

  }

};