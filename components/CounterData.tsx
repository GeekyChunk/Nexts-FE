import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../store/hooks'

import { selectCount } from '../store/features/counter/counterSlice'

export default function CounterData() {
	const count = useAppSelector(selectCount)

	return (
		<>
			{count}
		</>
	)
}