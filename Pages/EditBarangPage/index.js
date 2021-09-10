import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class EditBarangPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kodeBarang: this.props.route.params.kodeBRG,
      dataBarang: [],
      namabrg: '',
      satuanbrg: '',
      qtybrg: '',
    };
  }

  getDetail = () => {
    fetch(
      'http://192.168.153.18/APIBarangMDjamil/public/barang/' +
        this.state.kodeBarang,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({dataBarang: json[0]});
        console.log(json);
        this.setState({namabrg: this.state.dataBarang.namabrg});
        this.setState({satuanbrg: this.state.dataBarang.satuanbrg});
        this.setState({qtybrg: this.state.dataBarang.qtybrg});
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDetail();
  };

  deleteBarang = () => {
    fetch(
      'http://192.168.153.18/APIBarangMDjamil/public/barang/' +
        this.state.kodeBarang,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.replace('BarangPage');
      })
      .catch(err => console.log(err));
  };

  updateBarang = () => {
    fetch(
      'http://192.168.153.18/APIBarangMDjamil/public/barang/' +
        this.state.kodeBarang,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          namabrg: this.state.namabrg,
          satuanbrg: this.state.satuanbrg,
          qtybrg: this.state.qtybrg,
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        ToastAndroid.show(
          `Data dengan kode ${this.state.kodeBarang} berhasil diupdate`,
          ToastAndroid.SHORT,
        );
        this.props.navigation.replace('BarangPage');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#48cae4', '#023e8a']}
          style={styles.konten}>
          <Text style={styles.txtheader}>Edit Data Barang</Text>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.txtlabel}>Kode barang</Text>
              <TextInput
                value={this.state.dataBarang.kodebrg}
                editable={false}
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
            onPress={() =>
              Alert.alert('Wait A Minute', 'Are you sure for delete this ?', [
                {
                  text: 'Not Yet',
                  style: 'No',
                  onPress: () => null,
                },
                {
                  text: 'Delete Now',
                  onPress: () => this.deleteBarang(),
                },
              ])
            }>
            <Text style={styles.btnhapus}>Hapus Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.updateBarang()}>
            <Text style={styles.btnsimpan}>Update Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EditBarangPage;

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
    flexDirection: 'row',
    alignItems: 'center',
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

  btnhapus: {
    backgroundColor: 'white',
    color: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    textAlign: 'center',
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 1,
    fontFamily: 'MontserratAlternates-SemiBold',
  },

  btnsimpan: {
    backgroundColor: '#00b4d8',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
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
