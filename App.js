import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {


constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


  render() {
    return (
      <WebView
        source={{uri: 'http://192.168.8.105/show.php?lat='+this.state.latitude+'&lng='+this.state.longitude}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
