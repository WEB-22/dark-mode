import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
	const [ isDark, setIsDark ] = useLocalStorage('true');
	useEffect(
		() => {
			// * don't forget to check against the boolean true not the string true
			if (isDark === true) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ isDark ]
	);
	// * was not returning an array with two values. missing the brackets.
	return [ isDark, setIsDark ];
};

export default useDarkMode;
