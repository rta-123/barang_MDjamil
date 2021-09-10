import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class TambahPetugasPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPetugas: [],
      kodeptg: '',
      namaptg: '',
      jabatanptg: '',
      alamatptg: '',
    };
  }

  saveDataPetugas = () => {
    fetch('http://192.168.153.18/APIBarangMDjamil/public/petugas', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kodeptg: this.state.kodeptg,
        namaptg: this.state.namaptg,
        jabatanptg: this.state.jabatanptg,
        alamatptg: this.state.alamatptg,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.push('PetugasPage');
        json.status == 201
          ? Alert.alert('Sukses', 'data berhasil disimpan')
          : '';
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({kodeptg: ''});
        this.setState({namaptg: ''});
        this.setState({jabatanptg: ''});
        this.setState({alamatptg: ''});
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.konten}>
          <Text style={styles.txtheader}>Tambah Data Petugas</Text>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.txtlabel}>Kode petugas</Text>
              <TextInput
                value={this.state.kodeptg}
                onChangeText={value => this.setState({kodeptg: value})}
                placeholder="Input kode petugas"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Nama petugas</Text>
              <TextInput
                value={this.state.namaptg}
                onChangeText={value => this.setState({namaptg: value})}
                placeholder="Input nama petugas"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Jabatan</Text>
              <TextInput
                value={this.state.jabatanptg}
                onChangeText={value => this.setState({jabatanptg: value})}
                placeholder="Input jabatan"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Alamat</Text>
              <TextInput
                value={this.state.alamatptg}
                onChangeText={value => this.setState({alamatptg: value})}
                placeholder="Input alamat"
                style={styles.txtinput}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.saveDataPetugas()}>
            <Text style={styles.btnsimpan}>Simpan Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TambahPetugasPage;

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
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 8,
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

  txtinput: {
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    fontFamily: 'MontserratAlternates-Medium',
    marginBottom: 19,
  },

  txtlabel: {
    color: 'white',
    marginHorizontal: 20,
    fontFamily: 'MontserratAlternates-Medium',
    marginBottom: 5,
  },
});
