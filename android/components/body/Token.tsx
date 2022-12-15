import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import variables from '../../../styles/variables';
import {markCell} from '../../../features/gameSlice';
import {useAppSelector, useAppDispatch} from '../../../features/hooks/hooks';

type SignProps = {
  sign: string;
  purpose: string;
  indexRow: number;
  index: number;
};
const getStyles =(sign : string) =>{
  return {
    fontSize: 60,
    color : sign === 'x' ? styles.x.color : styles.o.color,
  }


}


const Token: React.FC<SignProps> = ({sign, purpose, index, indexRow}) => {
  const {board, winner, player} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  let myStyle: [{}] = [styles.cell];
  if (purpose === 'active') {
    myStyle.push(styles.active);
  }
  return (
    <TouchableOpacity
      onPress={() => dispatch(markCell({indexRow, index}))}
      style={myStyle}>
      <Text style={getStyles(sign)}>{sign}</Text>
    </TouchableOpacity>
  );
};

export default Token;

const styles = StyleSheet.create({
  cell: {
    width: `${100 / 3}%`,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor : variables.border_background,
    borderWidth : 3
  },
  active: {
    backgroundColor: variables.game_background,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: variables.game_boarders
  },
  x: {
    color: variables.x_token,
    fontSize: 60,
  },
  o: {
    color: variables.o_token,
    fontSize: 60,
  },
});
