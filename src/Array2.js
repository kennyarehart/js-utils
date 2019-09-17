// search methods
export const indexOfByKey = (array, attr, value) => {
	const k = array.length
	for (var i = 0; i < k; i++) {
		if (array[i][attr] === value) {
			return i
		}
	}
	return -1
}

export const findByKey = (array, attr, value) => {
	const index = arrayIndexOfByKey(array, attr, value)
	return index > -1 ? array[index] : undefined
}

// modify methods
export const shuffle = array => array.sort(() => (Math.random() < 0.5 ? 1 : -1))

export const removeByKey = (array, attr, value) => {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i][attr] === value) {
			return array.splice(i, 1)[0]
		}
	}
	return
}

export const insert = (array, index, ...items) => {
	array.splice(index, 0, ...items)
}

export const remove = (array, item, removeAll) => {
	let found = []
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] === item) {
			found.push(array.slice(i, 1))
			if (!removeAll) {
				return found[0]
			}
		}
	}
	return found.length > 0 ? found : false
}

export const clone = array => array.slice()
