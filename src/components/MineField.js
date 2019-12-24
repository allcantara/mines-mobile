import React from 'react';
import { View, StyleSheet } from 'react-native';

import Field from './Fields'

export default props => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((field, fieldIndex) => {
      return <Field { ...field } key={fieldIndex}
        onOpen={() => props.onOpenField(rowIndex, fieldIndex)}
        onSelect={e => props.onSelectField(rowIndex, fieldIndex)}
      />
    })

    return <View  style={{ flexDirection: 'row' }} key={rowIndex} >{columns}</View>
  })

  return (
    <View style={styles.container}>{rows}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
})
