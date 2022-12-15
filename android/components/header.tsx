import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { abortGame } from '../../features/gameSlice'
import { useAppDispatch, useAppSelector } from '../../features/hooks/hooks'
import variables from '../../styles/variables'
const Header = () => {
  const { player } = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()
    return (
        <View style ={styles.header}>
        <Text style = { styles.title}> Tick Tack Toe </Text>
        {
          player !== '' ?
            <TouchableOpacity 
              style ={styles.actionButton} 
              onPress ={()=>dispatch(abortGame())}
            > 
              <Text>abort</Text>
            </TouchableOpacity >
             :
             ''
        }
     
      </View>
      
    )

}

export default Header
const styles = StyleSheet.create({
    header : {

        backgroundColor : variables.header_footer_background , 
        flexDirection : 'row',
        justifyContent : 'center',
        height: '10%',
        alignItems : 'center'
    } ,
    title :{
      textTransform : 'uppercase'
    } ,
    actionButton : {
      position : 'absolute',
      right : 0,
      color: variables.header_button,
    }
})
