import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ProfilPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.header}></LinearGradient>
        <View style={styles.konten}>
          <View style={styles.frameimage}>
            <Image
              source={require('../../image/userimage.jpeg')}
              style={styles.image}
            />
            <Text style={styles.txtnama}>Emiranus Gulo</Text>
          </View>

          <View style={styles.txtdata}>
            <Text style={styles.txtttl}>Tempat/Tanggal Lahir</Text>
          </View>
          <Text style={styles.txtsdate}>Harewakhe, 12 Mei 1996</Text>

          <View style={styles.txtdata}>
            <Text style={styles.txtttl}>Alamat</Text>
          </View>
          <Text style={styles.txtsdate}>
            Jl.Seb Palinggam No.48 Kota Padang, Sumatera Barat
          </Text>

          <View style={styles.txtdata}>
            <Text style={styles.txtttl}>No Handphone</Text>
          </View>
          <Text style={styles.txtsdate}>0823-8512-4276</Text>

          <View style={styles.txtdata}>
            <Text style={styles.txtttl}>Email</Text>
          </View>
          <Text style={styles.txtsdate}>emiranus12@gmail.com</Text>
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

export default ProfilPage;

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

  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },

  frameimage: {
    alignItems: 'center',
    marginTop: -80,
  },

  txtnama: {
    fontSize: 19,
    fontFamily: 'MontserratAlternates-Bold',
    marginTop: 10,
    color: '#000814',
  },

  txtdata: {
    backgroundColor: '#48cae4',
    height: 27,
    marginTop: 35,
    justifyContent: 'center',
    width: 210,
    borderTopRightRadius: 50,
  },

  txtttl: {
    color: '#000814',
    marginLeft: 20,
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 12,
  },

  txtsdate: {
    marginLeft: 20,
    fontFamily: 'MontserratAlternates-SemiBold',
    fontSize: 15,
    marginTop: 3,
  },
});
