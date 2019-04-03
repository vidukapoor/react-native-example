/**
 * @author vishwadeep.kapoor
 * @Date: 2019-03-31 18:20:48
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-02 10:00:53
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
    width: 100%;  
    fontSize: 18px;
    opacity: 0.8;
    color: #514A4A;
`;

class LoginWrapper extends PureComponent {
  loginClicked = () => {
    console.log('login is clicked');
    this.props.navigation.navigate('Home');
  }
  toSignupScreen = () => {
    this.props.navigation.navigate('Signup');
  }
  render() {
    return (
      <View style={{ padding: 30, flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ marginLeft: '40%', marginTop: '20%' }}>
            <Text>
              Image
            </Text>
          </View>
          <View style={{ marginTop: '30%', flexDirection: 'column' }}>
            <TextInput
              placeholder="Email"
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', marginBottom: 35 }}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoFocus={false}
              autoCorrect={false}
              editable
              underlineColorAndroid="transparent"
              style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC' }}
            />
            <Text style={{ textAlign: 'right', color: '#514A4A', fontSize: 14, fontFamily: 'OpenSans-Italic', marginBottom: 18, padding: 4 }}>Forgot Password?</Text>
            <TouchableOpacity
              style={{ backgroundColor: '#193582', borderRadius: 23, height: 30, width: '22%', marginLeft: '40%' }}
              onPress={this.loginClicked}
            >
              <Text style={{ textAlign: 'center', color: '#fff', marginTop: 5, fontSize: 13 }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 100, marginTop: 33, flex: 1, flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, width: 130 }}>
              New To System?
            </Text>
            <TouchableOpacity onPress={this.toSignupScreen}>
              <Text>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

LoginWrapper.propTypes = {
  navigation: shape({}).isRequired,
};

export default LoginWrapper;
