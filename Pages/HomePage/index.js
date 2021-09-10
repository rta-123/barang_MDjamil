import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.header}>
          <Text style={styles.txtheader}>Home Page</Text>
        </LinearGradient>
        <View style={styles.konten}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('ProfilPage')}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#023e8a', '#48cae4']}
              style={styles.card}>
              <Text style={styles.txtcard}>Profil</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('BarangPage')}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#023e8a', '#48cae4']}
              style={styles.card2}>
              <Text style={styles.txtcard}>Data Barang</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('PetugasPage')}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#023e8a', '#48cae4']}
              style={styles.card3}>
              <Text style={styles.txtcard}>Data Petugas</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <LinearGradient
          start={{x: 0, y: 2}}
          end={{x: 2, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.footer}>
          <Text style={styles.txtfooter}>RSUP M. Djamil Padang</Text>
        </LinearGradient>
      </View>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 1,
    backgroundColor: 'pink',
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
  },

  konten: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#48cae4',
    height: 120,
    marginTop: 20,
    marginRight: 20,
    borderTopRightRadius: 110,
    justifyContent: 'center',
  },

  card2: {
    backgroundColor: '#48cae4',
    height: 120,
    marginTop: 10,
    marginRight: 20,
    justifyContent: 'center',
  },

  card3: {
    backgroundColor: '#48cae4',
    height: 120,
    marginTop: 10,
    marginRight: 20,
    borderBottomRightRadius: 110,
    justifyContent: 'center',
  },

  footer: {
    backgroundColor: 'pink',
    height: 60,
    borderTopRightRadius: 80,
    justifyContent: 'center',
  },

  txtcard: {
    marginLeft: 20,
    color: 'white',
    fontSize: 23,
    fontFamily: 'MontserratAlternates-SemiBold',
  },

  txtheader: {
    fontFamily: 'MontserratAlternates-Bold',
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },

  txtfooter: {
    marginLeft: 20,
    color: 'white',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Medium',
  },
});
