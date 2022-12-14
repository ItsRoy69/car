import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from 'react-router-native';
import React from "react";
import SPACING from "./app/config/SPACING";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import CompanyScreen from "./app/screens/CompanyScreen";

const App = () => {
  return (
    <NativeRouter>
      <View
        style={{
          paddingHorizontal: SPACING * 2,
          flex: 1,
          backgroundColor: colors.black,
        }}
      >
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/company" element={<CompanyScreen />} />
        </Routes>
        <StatusBar barStyle="light-content" />
      </View>
    </NativeRouter>
  );
};

export default App;

const styles = StyleSheet.create({});
