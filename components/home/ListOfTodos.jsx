import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Shield, ShieldCheck, Star, StarOff } from 'lucide-react-native'
import { useTodos } from '../../context/AppContext'

const ListOfTodos = () => {

  const { todos, setTodos, toggleFavorite, toggleFinished } = useTodos()

  const filteredTodos = todos.filter((item) => item.isFinished === false)

  return (
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
            <TouchableOpacity style={[ tw`ml-1` ]} onPress={() => toggleFinished(item.id)}>
              {item.isFinished === true ? (<ShieldCheck size={20} color='red' />) : (<Shield size={20} color='black' />)}
            </TouchableOpacity>
          </View>
        </View>
      )
    }}
  />
  )
}

export default ListOfTodos

const styles = StyleSheet.create({})