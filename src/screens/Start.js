import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as userActions from '../containers/UserContainer/actions';

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Image = styled.Image`
    display: flex;
    width: 150px;
    height: 200px;
`;

class Start extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    if (this.props.user.get('firstTimeStartingApp')) {
      this.props.setUserNotFirstUsage();
    }
    console.log('.....this.porps', this.props)
  }

  toLoginScreen = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <Text>This is Landing Screen</Text>
        <Image source={require('../assets/logo.png')} />
        <TouchableOpacity onPress={this.toLoginScreen}>
          <Text>Navigate to Login</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

Start.navigationOptions = {
  title: 'Start',
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUserNotFirstUsage: result => dispatch(userActions.setUserNotFirstUsage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
