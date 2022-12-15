import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppSelector, useAppDispatch} from '../../features/hooks/hooks';
import {startGame} from '../../features/gameSlice';
import variables from '../../styles/variables';

const Footer = () => {
  const {winner, player} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const onPress = () => dispatch(startGame());
  let active: boolean = true;
  let myStyles = [styles.footer]
  if (!player|| winner) {
    active = true;
    myStyles = [styles.footer , styles.active]
  } else {
    active =false
    myStyles = [styles.footer]
  }
  console.log(`player =${player} winner = ${winner} active =${active}`)
  return (
    <TouchableOpacity
      style={styles.footer}
      //is there a winner
      disabled={!active}
      onPress={onPress}>
      <View>
        <Text style={{textTransform: 'uppercase', color: variables.text_color}}>
          { 
            active ? 'start game' : `${player}'s turn`  
          }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: variables.header_footer_background,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active :{
    backgroundColor : variables.button_background
  }
});
