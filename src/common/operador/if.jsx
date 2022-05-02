// eslint-disable-next-line no-unused-vars
import React from 'react'

const If = (props) => {
	if (props.test) {
		return props.children
	} else {
		return false
	}
}

export default If
