/**
 * @author vishwadeep.kapoor
 * @Date: 2019-03-31 18:20:48
 * @Last Modified by: vishwadeep
 * @Last Modified time: 2019-04-16 21:12:38
 */
import React, { PureComponent } from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';
import { HOME_LIST_DATA } from './constant';

const Image = styled.Image`
    display: flex;
    width: 48px;
    height: 50px;
`;
class HomeWrapper extends PureComponent {
  constructor() {
    super();
    this.state = {
      language: '',
      language1: '',
      isShowModal: true,
      selectedItem: -1,
    };
    this.selectedItemList = this.selectedItemList.bind(this);
  }

  setModalVisible() {
    this.setState({ isShowModal: false });
  }

  logoutClicked = () => {
    console.log('logoutClicked is clicked');
    this.props.navigation.navigate('Login');
  }
  sendClicked = () => {
    this.props.navigation.navigate('SendPayments');
  }

  selectedItemList = (selectedItem) => {
    this.setState({ selectedItem });
  }

  redirectSubMenu = (screen) => {
    console.log('.........', screen);
    this.props.navigation.navigate(screen);
  }

  renderPaymentSuccessModal = () => (
    <View style={{
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '40%',
      backgroundColor: '#FFFFFF',
      height: 200,
      borderRadius: 10,
    }}
    >
      <View style={{ padding: '18%' }}>
        <Text style={{ color: '#18337F', fontSize: 20 }}>PAYMENT SUCCESSFULL</Text>
        <Text style={{ color: '#5A5A5A', fontSize: 12, marginTop: 17 }}>Payment is successfull of 10,000 </Text>
      </View>
      <View style={{
        position: 'absolute',
        bottom: 0,
        height: 50,
        backgroundColor: '#EDEDED',
        width: '100%',
        borderRadius: 3.19,
        alignItems: 'center',
      }}
      >
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.isShowModal);
          }}
        >
          <Text style={{ marginTop: 10, color: '#141E5E', fontSize: 13 }}>OK</Text>
        </TouchableHighlight>
      </View>
    </View>
  )


  /**
   * @todo for IOS this date picker will be different
   * @see https://codeburst.io/linear-gradient-for-border-color-in-react-native-5bcab3eea1c9
   */
  render() {
    const { navigation: { state: {
      params: { data: { isFromReview = false } = {} } = {},
    } } } = this.props;
    const { isShowModal, selectedItem } = this.state;
    console.log('SendPaymentsClicked render.....', this.props, isShowModal && isFromReview, isShowModal, isFromReview);
    return (
      <View style={{ flex: 1, backgroundColor: '#193582' }}>
        <View style={{ marginLeft: '40%', marginTop: '20%' }}>
          <Modal
            animationType="slide"
            transparent
            visible={isShowModal && isFromReview}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            {this.renderPaymentSuccessModal()}
          </Modal>

          <Text style={{ color: '#fff' }}>
            Image
          </Text>
        </View>
        <View style={{ padding: 40 }}>
          {HOME_LIST_DATA.map(item => (
            <View key={item.key}>
              <TouchableOpacity onPress={() => this.selectedItemList(item.key)}>
                <Text style={{ color: 'red', fontSize: 18 }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              {item.key === selectedItem && item.list.map(subItem => (
                <TouchableOpacity
                  onPress={() => this.redirectSubMenu(subItem.path)}
                  key={subItem.key}
                >
                  <Text style={{ color: '#fff', fontSize: 15 }}>
                    {subItem.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={{ padding: 40, alignItems: 'center' }}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={{
            opacity: 0.8,
            fontSize: 14,
            height: 30,
            marginTop: 30,
            color: '#ffff',
          }}
          >Scan QR code and make payments</Text>
        </View>
        <View style={{
          backgroundColor: '#193582',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
        >
          <View style={{ marginTop: 33, marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={this.sendClicked} style={{ marginLeft: 80 }}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={{ color: '#fff', marginTop: 18 }}>Send Data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logoutClicked} style={{ marginLeft: 100 }}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={{ color: '#fff', marginTop: 18 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

HomeWrapper.propTypes = {
  navigation: shape({}).isRequired,
};
export default HomeWrapper;
