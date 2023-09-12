import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import TodosSearch from '../components/TodosSearch'
import ListOfTodos from '../components/home/ListOfTodos'

const HomeTab = () => {
  return (
    <SafeAreaView style={[ tw`bg-white`, styles.container ]}>
      <TodosSearch />
      <ListOfTodos />
    </SafeAreaView>
  )
}

export default HomeTab

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})