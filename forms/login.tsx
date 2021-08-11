import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setToken } from '../store/features/user/userSlice'

export default function User() {
	const user = useAppSelector(state => state.user)
 	const dispatch = useAppDispatch()
	
	return (
		<>
			
		</>
	)
}
