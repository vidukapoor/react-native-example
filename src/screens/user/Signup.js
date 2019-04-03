/**
 * @author vishwadeep.kapoor
 * @Date: 2019-03-31 18:20:48
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-02 10:01:50
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 100%;  
    fontSize: 18px;
    opacity: 0.8;
    color: #514A4A;
`;

class SignupWrapper extends PureComponent {
  signupClicked = () => {
    console.log('signup is clicked');
  }
  toLoginScreen = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={{ padding: 30, flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ marginLeft: '30%', marginTop: '10%' }}>
            <Text>
              Some text here
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder="Legal First Name"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Legal Last Name"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Email"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 14 }}
            />
            <TextInput
              placeholder="Mobile Phone"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 50 }}
            />
            <TouchableOpacity
              style={{ backgroundColor: '#193582', borderRadius: 23, height: 30, width: '22%', marginLeft: '40%', marginBottom: 30 }}
              onPress={this.signupClicked}
            >
              <Text style={{ textAlign: 'center', color: '#fff', marginTop: 5, fontSize: 13 }}>Signup</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: '25%', flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, marginRight: 5 }}>Already a member?</Text>
            <TouchableOpacity onPress={this.toLoginScreen}>
              <Text style={{ fontSize: 18 }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SignupWrapper.propTypes = {
  navigation: shape({}).isRequired,
};

export default SignupWrapper;
