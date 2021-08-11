import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks'

import { decrement, increment, incrementByAmount, incrementAsync } from './counterSlice'

import {
  Button,
  Text,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"


export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const [ incrementAmount, setIncrementAmount ] = useState('2');

  return (
    <Stack>
      <Text fontSize="2xl">{count}</Text>

      <Stack direction="row">

        
        <Button
          colorScheme="green"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Button
          colorScheme="red"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </Stack>

      <NumberInput
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e)}
        >
          <NumberInputField/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

      <Stack direction="row">
        <Button
          colorScheme="blue"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </Button>
      </Stack>
    </Stack>
  )
}