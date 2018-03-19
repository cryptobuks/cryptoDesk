import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui'
import {styles} from './styles';

const Navigation = () => {
  return (
    <NavigationBar
      centerComponent={<Title>CryptoDesk</Title>}
    />
  );
};

export default Navigation;
