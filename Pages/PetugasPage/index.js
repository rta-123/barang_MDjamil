import {it} from 'jest-circus';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class PetugasPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPetugas: [],
    };
  }

  getDataPetugas = () => {
    fetch('http://192.168.153.18/APIBarangMDjamil/public/petugas')
      .then(response => response.json())
      .then(json => this.setState({dataPetugas: json}))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDataPetugas();
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.konten}>
          <Text style={styles.txtheader}>Data Petugas</Text>
          <View style={{marginTop: 20}}>
            <FlatList
              data={this.state.dataPetugas}
              keyExtractor={item => item.kodeptg}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    this.props.navigation.navigate('EditPetugasPage', {
                      kodePTG: item.kodeptg,
                    })
                  }>
                  <LinearGradient
                    start={{x: 0, y: 2}}
                    end={{x: 2, y: 0}}
                    colors={['#00b4d8', '#48cae4']}
                    style={styles.card}>
                    <View>
                      <Text style={styles.txtcardnama}>
                        Kode Petugas : {item.kodeptg}
                      </Text>
                      <Text style={styles.txtcard}>{item.namaptg}</Text>
                      <Text style={styles.txtcard}>{item.jabatanptg}</Text>
                      <Text style={styles.txtcard}>{item.alamatptg}</Text>
                    </View>
                    <View>
                      <Image source={require('../../image/arrow.png')} />
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            />
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('TambahPetugasPage')}>
            <Text style={styles.btnsimpan}>Tambah Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PetugasPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  konten: {
    flex: 15,
    backgroundColor: 'pink',
    borderBottomLeftRadius: 100,
  },

  footer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  txtheader: {
    fontFamily: 'MontserratAlternates-SemiBold',
    color: 'white',
    fontSize: 23,
    marginHorizontal: 20,
    marginTop: 20,
  },

  card: {
    backgroundColor: 'white',
    height: 150,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 8,
    flexDirection: 'row',
  },

  txtcard: {
    color: 'white',
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: 16,
  },

  txtcardnama: {
    color: 'white',
    fontFamily: 'MontserratAlternates-Bold',
    fontSize: 21,
  },

  btnsimpan: {
    backgroundColor: '#00b4d8',
    color: 'white',
    padding: 8,
    marginHorizontal: 120,
    textAlign: 'center',
    borderRadius: 50,
    fontFamily: 'MontserratAlternates-SemiBold',
  },
});
