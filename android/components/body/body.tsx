import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppSelector, useAppDispatch} from '../../../features/hooks/hooks';
import variables from '../../../styles/variables';
import Token from './Token';
import Victory from './victory.component';

const Body = () => {
  const {board, winner, player} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  let myStyles: [{}] = [styles.body];
  let purpose = '';
  let victory = false;
  // need a new game
  if (player && !winner) {
    myStyles.push(styles.body_active);
    purpose = 'active';
  } else if (player && winner) {
    purpose = '';
    myStyles = [styles.body];
    victory = true
  }

  return (
    <View style={myStyles}>
      <View style={styles.board_container}>
        {
          victory ? <Victory winner = {winner || ''}/> :
        
        board.map((row, indexRow) =>
          row.map((element, index) => (
            <Token
              key={'' + indexRow + index}
              purpose={purpose}
              sign={board[indexRow][index]}
              indexRow={indexRow}
              index={index}
            />
          )),
        )}
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    height: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.border_background,
  },
  body_active: {
    backgroundColor: variables.game_background,
  },
  board_container: {
    width: variables.width,
    aspectRatio: 1,
    backgroundColor: variables.border_background,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    zIndex: 1,
  },
});
