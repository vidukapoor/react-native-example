/**
 * @author vishwadeep.kapoor
 * @Date: 2019-05-03 23:43:37
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-05-04 00:50:15
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Alert, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 60%;  
    fontSize: 18px;
    opacity: 0.8;
    color: #514A4A;
`;


class CreateVpa extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'Create New VPA',
      headerStyle: {
        backgroundColor: 'blue',
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
          <Text style={{ width: 60, color: '#fff' }}>Go Back</Text>
        </TouchableOpacity>
      ),
    };
  };

  showAlert = () => {
    const { navigation } = this.props;
    Alert.alert(
      null,
      'VPA successfully created!',
      [
        { text: 'Ok', onPress: () => navigation.navigate('HomeIndex') },
      ],
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, padding: 30 }}>Create UPI ID</Text>
        <View style={{ flexDirection: 'row', padding: 18 }}>
          <Text style={{ textAlignVertical: 'bottom', fontSize: 22, marginRight: 10 }}>S</Text>
          <TextInput
            placeholder="Select your UPI id"
            editable
            underlineColorAndroid="transparent"
            style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}
          />
          <Text style={{ textAlignVertical: 'bottom', fontSize: 22 }}>@icici</Text>
        </View>
        <Text style={{ textAlign: 'center', padding: 20, fontSize: 18, textDecorationLine: 'underline' }}>
          Check Availability
        </Text>
        <Text style={{ padding: 16, fontSize: 16 }}>
          Alternate Suggested UPI Id{'\n'}
          Hello hello2
        </Text>
        <View style={{
          position: 'absolute',
          bottom: 0,
          height: 50,
          backgroundColor: 'green',
          width: '100%',
          borderRadius: 3.19,
          alignItems: 'center',
        }}
        >
          <TouchableHighlight
            // onPress={() => {
            //   navigation.navigate('HomeIndex');
            // }}
            onPress={this.showAlert}
          >
            <Text style={{ marginTop: 14, color: '#141E5E', fontSize: 16, fontWeight: 'bold' }}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

CreateVpa.propTypes = {
  navigation: shape({}).isRequired,
};
export default CreateVpa;
