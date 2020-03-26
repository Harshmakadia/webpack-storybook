import React, { Component } from 'react';
import Avatar from '../components/Avatar/avatar'

class App extends Component {
  render() {
    return (
      <div>
      <Avatar
      img="https://greatindiantours.com/wp-content/themes/travel-log/images/dummy-user.jpg"
      height={60}
      width={60}
      circle={false}
      altText={'User Icon'}
    />
        <h1>Yay! React App with Webpack :p</h1>
        <span><i>GoodBye <a href="https://github.com/facebook/create-react-app">CRA</a> you will be missed</i></span>
      </div>
    );
  }
}

export default App;
