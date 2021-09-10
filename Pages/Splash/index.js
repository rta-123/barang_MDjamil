import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('HomePage');
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.frame}>
            <Image source={require('../../image/iconhospital.png')} />
          </View>
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  frame: {
    backgroundColor: '#48cae4',
    padding: 20,
    borderRadius: 30,
    elevation: 8,
  },
});
