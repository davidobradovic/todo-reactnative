import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react-native'
import tw from 'twrnc'

const TodosSearch = () => {
  return (
    <View style={[ tw`flex-row items-center p-2 bg-gray-50 mx-2 rounded-full` ]}>
      <Search size={20} color='black' style={[ tw`ml-1` ]} />
      <TextInput 
        style={[ tw`p-2`, styles.todosInput ]}
        placeholder='Search todos'
      />
      <TouchableOpacity style={[ tw`p-2 bg-black rounded-full` ]}>
        <Text style={[ tw`text-white` ]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodosSearch

const styles = StyleSheet.create({
    todosInput: {
        flex: 1,
    }
})