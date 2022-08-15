import React from 'react'
import { FlatList } from 'react-native'
import InstructionItem from './InstructionItem.jsx'
import InstructionData from '../../data/InstructionData.js'

export const InstructionListUI = ({ steps }) => {
    return (
      <FlatList
        data={steps}
        renderItem={({item: step}) =>
          <InstructionItem {...step}/>
        }
      />
    )
  }

const InstructionList = () => {
    return (
        <InstructionListUI steps={InstructionData}/>
    )
}

export default InstructionList