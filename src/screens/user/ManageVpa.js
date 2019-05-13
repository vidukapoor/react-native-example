/**
 * @author vishwadeep.kapoor
 * @Date: 2019-05-03 23:43:37
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-05-04 00:53:25
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';


class ManageVpa extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'Manage VPA',
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

  // backgroundColor: '#193582'
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, color: '#4C4C4C' }}>ManageVpa</Text>
      </View>
    );
  }
}
export default ManageVpa;
