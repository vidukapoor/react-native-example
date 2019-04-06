/**
 * @author vishwadeep.kapoor
 * @Date: 2019-04-05 00:18:39
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-05 00:27:33
 */
import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class SendPayments extends PureComponent {
  logoutClicked = () => {
    this.props.navigation.navigate('Login');
  }
  cancelClicked = () => {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View>
        <Text>SendPayments here</Text>
        <View style={{ marginTop: 33, marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={this.cancelClicked} style={{ marginLeft: 90 }}>
            <Text style={{ color: '#000', marginTop: 18 }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logoutClicked} style={{ marginLeft: 100 }}>
            <Text style={{ color: '#000', marginTop: 18 }}>Success/Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SendPayments;
