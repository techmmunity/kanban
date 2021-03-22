import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(key: string, value: T): Response<T> => {
	const [state, setState] = useState<T>(() => {
		const storageValue = localStorage.getItem(key);
		if (storageValue) return JSON.parse(storageValue);

		return value;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};
