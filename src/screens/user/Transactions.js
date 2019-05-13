/**
 * @author vishwadeep.kapoor
 * @Date: 2019-05-03 23:43:37
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-05-06 22:50:17
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import { Text, View, TouchableOpacity, Picker } from 'react-native';


class Transactions extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'Transactions History',
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
  constructor() {
    super();
    this.state = {
      choosenLabel: '',
      choosenLabel1: '',
      choosenLabel2: '',
    };
  }
  //  backgroundColor: '#193582'
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Picker
            style={{ width: '30%' }}
            backgroundColor="green"
            selectedValue={this.state.choosenLabel}
            onValueChange={
              (itemValue, itemIndex) => this.setState({
                choosenLabel: itemValue,
                choosenindex: itemIndex,
              })
            }
          >
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="React" value="word2" />
          </Picker>
          <Picker
            style={{ width: '35%' }}
            selectedValue={this.state.choosenLabel1}
            onValueChange={
              (itemValue, itemIndex) => this.setState({
                choosenLabel1: itemValue,
                choosenindex: itemIndex,
              })
            }
          >
            <Picker.Item label="Categories" value="Categories" />
            <Picker.Item label="React" value="word2" />
          </Picker>
          <Picker
            style={{ width: '30%' }}
            selectedValue={this.state.choosenLabel2}
            onValueChange={
              (itemValue, itemIndex) => this.setState({
                choosenLabel2: itemValue,
                choosenindex: itemIndex,
              })
            }
          >
            <Picker.Item label="Filters" value="filters" />
            <Picker.Item label="React" value="word2" />
          </Picker>
        </View>
        <View>
          <Text>Paid To</Text>
          <Text>2,500</Text>
          <Text>Sym</Text>
          <Text>2 Days Ago</Text>
        </View>
      </View>
    );
  }
}
export default Transactions;
