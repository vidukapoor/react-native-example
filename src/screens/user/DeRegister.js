/**
 * @author vishwadeep.kapoor
 * @Date: 2019-04-16 21:10:12
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-18 20:53:49
 */
import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class DeRegister extends PureComponent {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log('nav options......', navigation, navigationOptions);
    return {
      title: 'De-Register',
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

  constructor(props) {
    super(props);
    this.handleDataSelected = this.handleDataSelected.bind(this);
  }
  state = {
    dataSelected: -1,
  }
  handleDataSelected = (activeId) => {
    console.log('activeId selected....', activeId);
    this.setState({ dataSelected: activeId });
  }

  render() {
    const { dataSelected } = this.state;
    console.log('data selected....', dataSelected);
    return (
      <View style={{ flex: 1, backgroundColor: '#193582' }}>
        <View style={{ margin: '10%', marginTop: '12%' }}>
          <View style={{ marginTop: '8%' }}>
            <View style={{ padding: 20, backgroundColor: '#fff', height: 110 }}>
              <TouchableOpacity onPress={() => this.handleDataSelected(1)}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16, color: '#4C4C4C' }}>username</Text>
                  <Text style={{ position: 'absolute', right: 10 }}>$20,000</Text>
                </View>
                <Text style={{ fontSize: 17 }}>emailId@example.com</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>9029090787</Text>
                  <Text style={{ color: 'green', position: 'absolute', right: 10 }}>Default</Text>
                </View>
              </TouchableOpacity>
            </View>
            {dataSelected > 0 &&
              <View style={{ height: 60, backgroundColor: '#EDEDED', borderRadius: 4, flexDirection: 'row' }}>
                <Text style={{
                  textAlign: 'center',
                  color: '#141E5E',
                  fontSize: 14,
                  alignSelf: 'center',
                  textAlignVertical: 'center',
                  width: '70%',
                }}
                >
                  Delink Account
                </Text>
                <Text style={{
                  textAlign: 'center',
                  color: '#141E5E',
                  fontSize: 14,
                  alignSelf: 'center',
                  textAlignVertical: 'center',
                }}
                >Edit</Text>
              </View>
            }
          </View>
        </View>
      </View>
    );
  }
}
export default DeRegister;
