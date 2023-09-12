import { FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Shield, ShieldCheck, Star, StarOff } from 'lucide-react-native'
import { useTodos } from '../context/AppContext'
import TodosSearch from '../components/TodosSearch'

const FavoritesTab = () => {
  const { todos, setTodos, toggleFavorite, toggleFinished } = useTodos();

  const filteredTodos = todos.filter((item) => item.isFavorite === true )

  console.log(filteredTodos)

  let content;

  {
    if(filteredTodos.length === 0) {
      content = (
        <View style={[ styles.noResultContainer ]}>
          <Text>There are no results</Text>
        </View>
      )
    } else {
      content = (
        <FlatList
        style={[tw`mt-2`]}
        data={filteredTodos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={[tw`bg-gray-50 p-3 mx-2 mb-2 rounded-full flex-row items-center justify-between`]}>
              <Text>{item.title}</Text>
              <View style={[ tw`flex-row items-center` ]}>
                <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                  {item.isFavorite === true ? (<Star size={20} color='gold' />) : (<StarOff size={20} color='black' />)}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFinished(item.id)}>
                  {item.isFinished === true ? (<ShieldCheck size={20} color='red' />) : (<Shield size={20} color='black' />)}
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
      )
    }
  }

  return (
    <SafeAreaView style={[ tw`bg-white`, styles.container ]}>
      <TodosSearch /> 
      {content}
    </SafeAreaView>
  )
}

export default FavoritesTab

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noResultContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})