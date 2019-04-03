/**
 * @author vishwadeep.kapoor
 * @Date: 2019-03-31 18:20:48
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-03-31 20:23:55
 */
import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Picker } from 'react-native';

class HomeWrapper extends PureComponent {
  constructor() {
    super();
    this.state = {
      language:''
    }
  }
  logoutClicked = () => {
    console.log('logoutClicked is clicked');
    this.props.navigation.navigate('Login');
  }
  /**
   * @todo for IOS this date picker will be different
   */
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Picker
          label="manage accounts"
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Account1" value="Account1" />
          <Picker.Item label="Account2" value="Account2" />
        </Picker>
        <TouchableOpacity onPress={this.logoutClicked}>
            <Text>Logout</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default HomeWrapper;
