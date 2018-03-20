import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationBar, Title, Icon } from '@shoutem/ui'
import {styles} from './styles';

const Navigation = () => {
  return (
    <NavigationBar
      style={{
        container: {backgroundColor: '#313640'},
      }}
      leftComponent={
        <Icon name="sidebar" style={{color:'#fff'}} />
      }
      centerComponent={
        <Title style={{color:'#fff'}}>
          CryptoDesk
        </Title>
      }
    />
  );
};

export default Navigation;
