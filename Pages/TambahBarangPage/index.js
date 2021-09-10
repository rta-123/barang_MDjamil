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

class TambahBarangPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBarang: [],
      kodebrg: '',
      namabrg: '',
      satuanbrg: '',
      qtybrg: '',
    };
  }

  saveDataBarang = () => {
    fetch('http://192.168.153.18/APIBarangMDjamil/public/barang', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kodebrg: this.state.kodebrg,
        namabrg: this.state.namabrg,
        satuanbrg: this.state.satuanbrg,
        qtybrg: this.state.qtybrg,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.push('BarangPage');
        json.status == 201
          ? Alert.alert('Sukses', 'data berhasil disimpan')
          : '';
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({kodebrg: ''});
        this.setState({namabrg: ''});
        this.setState({satuanbrg: ''});
        this.setState({qtybrg: ''});
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
          <Text style={styles.txtheader}>Tambah Data Barang</Text>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.txtlabel}>Kode barang</Text>
              <TextInput
                value={this.state.kodebrg}
                onChangeText={value => this.setState({kodebrg: value})}
                placeholder="Input kode barang"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Nama barang</Text>
              <TextInput
                value={this.state.namabrg}
                onChangeText={value => this.setState({namabrg: value})}
                placeholder="Input nama barang"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Satuan barang</Text>
              <TextInput
                value={this.state.satuanbrg}
                onChangeText={value => this.setState({satuanbrg: value})}
                placeholder="Input satuan barang"
                style={styles.txtinput}
              />

              <Text style={styles.txtlabel}>Qty</Text>
              <TextInput
                value={this.state.qtybrg}
                onChangeText={value => this.setState({qtybrg: value})}
                keyboardType="number-pad"
                placeholder="Input qty"
                style={styles.txtinput}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.saveDataBarang()}>
            <Text style={styles.btnsimpan}>Simpan Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TambahBarangPage;

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
