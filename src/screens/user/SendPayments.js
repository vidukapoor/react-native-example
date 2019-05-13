/**
 * @author vishwadeep.kapoor
 * @Date: 2019-04-05 00:18:39
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-06 23:16:17
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

class SendPayments extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'Send Data',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
        fontSize: 18,
        marginLeft: '25%',
        color: '#fff',
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }
          }
        >
          <Text style={{ width: 60 }}>Go Back</Text>
        </TouchableOpacity>
      ),
    };
  };

  constructor() {
    super();
    this.state = { showTextFields: false };
    this.showTextFields = this.showTextFields.bind(this);
  }

  logoutClicked = () => {
    this.props.navigation.navigate('ReviewPayment');
  }
  cancelClicked = () => {
    this.props.navigation.navigate('Home');
  }
  showTextFields = () => {
    const { showTextFields } = this.state;
    this.setState({ showTextFields: !showTextFields });
  }
  render() {
    const { navigation } = this.props;
    const { showTextFields } = this.state;
    console.log('.......', showTextFields);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 30, marginTop: 30 }}>
          <TouchableOpacity onPress={this.showTextFields} style={{ marginLeft: '20%' }}>
            <Text>Click For Options</Text>
          </TouchableOpacity>
          {showTextFields && <View>
            <TextInput
              placeholder="Field 1"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Field 2"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Field 3"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Field 4"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
          </View>}
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: '100%',
              padding: 20,
            }}
          />
          <Text style={{ marginTop: 30, marginLeft: '20%' }}>Options two here</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: '#193582',
          bottom: 0,
          height: 50,
          width: '100%',
        }}
        >
          <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ marginLeft: '20%' }}>
            <Text style={{ color: '#ffff' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logoutClicked} style={{ marginLeft: 100 }}>
            <Text style={{ color: '#ffff' }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SendPayments.propTypes = {
  navigation: shape({}).isRequired,
};
export default SendPayments;
