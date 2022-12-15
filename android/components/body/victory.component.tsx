import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import variables from '../../../styles/variables';
type VictoryProps = {
  winner: string;
};
const Victory: React.FC<VictoryProps> = ({winner}) => {
  return (
    <View style={styles.victory}>
        {
            winner ===  'xy' ? 
            <Text style ={{fontSize :50}}> it's a draw</Text>:
            <>
                <Text style ={winner === 'x' ? styles.x : styles.o}>{winner}</Text>
                <Text style ={{fontSize :50}}>is the winner</Text>
            </>

        }
    </View>
  );
};

export default Victory;

const styles = StyleSheet.create({
  victory: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    width: '100%',   
  },
  x: {
    color: variables.x_token,
    fontSize: 300,
  },
  o: {
    color: variables.o_token,
    fontSize: 300,
  },
});
