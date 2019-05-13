/**
 * @author vishwadeep.kapoor
 * @Date: 2019-04-06 23:14:30
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-12 00:01:52
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

class ReviewPayment extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'Review Data',
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

  successClicked = () => {
    this.props.navigation.navigate('HomeIndex', { data: { isFromReview: true } });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <View style={{
          marginTop: '40%',
          height: 220,
          marginLeft: '10%',
          marginRight: '10%',
          borderRadius: 10,
          backgroundColor: 'white',
        }}
        >
          <View style={{ marginTop: 50, flexDirection: 'row', marginLeft: 20 }}>
            <View style={{
              width: 60,
              height: 60,
              backgroundColor: '#D8D8D8',
              borderRadius: 20,
            }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ height: 20, fontSize: 16, color: '#4C4C4C' }}>Name {'\n'}</Text>
              <Text style={{ height: 20, fontSize: 16, color: '#4C4C4C' }}>email@mail.com {'\n'}</Text>
              <Text style={{ height: 20, fontSize: 12, color: '#4C4C4C', marginTop: 20 }}>Paying With {'\n'}</Text>
              <Text style={{ height: 20, fontSize: 16, color: '#4C4C4C' }}>user@upi</Text>
            </View>
          </View>
          <View style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#EDEDED',
            width: '100%',
            height: 50,
            alignItems: 'center',
          }}
          >
            <TouchableOpacity onPress={this.successClicked}>
              <Text style={{ color: '#141E5E', fontSize: 18, marginTop: 10 }}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ReviewPayment.propTypes = {
  navigation: shape({}).isRequired,
};
export default ReviewPayment;
