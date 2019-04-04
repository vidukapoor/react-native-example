/**
 * @author vishwadeep.kapoor
 * @Date: 2019-03-31 18:20:48
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-05 00:22:25
 */
import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Picker } from 'react-native';

const Image = styled.Image`
    display: flex;
    width: 48px;
    height: 50px;
`;
class HomeWrapper extends PureComponent {
  constructor() {
    super();
    this.state = {
      language: '',
      language1: '',
    };
  }
  logoutClicked = () => {
    console.log('logoutClicked is clicked');
    this.props.navigation.navigate('Login');
  }
  sendClicked = () => {
    console.log('SendPaymentsClicked is clicked');
    this.props.navigation.navigate('SendPayments');
  }
  /**
   * @todo for IOS this date picker will be different
   * @see https://codeburst.io/linear-gradient-for-border-color-in-react-native-5bcab3eea1c9
   */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: '40%', marginTop: '20%' }}>
          <Text>
            Image
          </Text>
        </View>
        <View style={{ padding: 40 }}>
          <Picker
            label="manage accounts"
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
            // mode="dropdown"
          >
            <Picker.Item label="Account1" value="Account1" />
            <Picker.Item label="Account2" value="Account2" />
          </Picker>
          <Picker
            label="Manage Services"
            selectedValue={this.state.language1}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language1: itemValue })
            }
          // mode="dropdown"
          >
            <Picker.Item label="Services1" value="Services1" />
            <Picker.Item label="Services2" value="Services2" />
          </Picker>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={{ padding: 40, alignItems: 'center' }}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={{
            opacity: 0.8,
            fontSize: 14,
            height: 30,
            marginTop: 30,
          }}
          >Scan QR code and make payments</Text>
        </View>
        <View style={{
          backgroundColor: '#193582',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
        >
          <View style={{ marginTop: 33, marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.sendClicked} style={{ marginLeft: 90 }}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={{ color: '#fff', marginTop: 18 }}>Send Data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logoutClicked} style={{ marginLeft: 100 }}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={{ color: '#fff', marginTop: 18 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeWrapper;
