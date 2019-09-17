export const getAngle = (x1, y1, x2, y2) => Math.atan2((y2 || 0) - y1, (x2 || 0) - x1)

export const getAnglePoint = (x, y, distance, angle) => {
	x += Math.cos(angle) * distance
	y += Math.sin(angle) * distance

	return [x, y]
}

export const getDistance = (x1, y1, x2, y2) => {
	x2 = x2 || 0
	y2 = y2 || 0
	return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1))
}

export const inRange = (val, a, b) => val <= Math.max(a, b) && val >= Math.min(a, b)

export const map = (x, a, b, c, d) => ((x - a) / (b - a)) * (d - c) + c

export const random = (a, b, increment) => {
	b = b || 0
	increment = increment != undefined && increment > 0 ? increment : 1

	const min = Math.ceil(Math.min(a, b) / increment) * increment
	const max = Math.floor(Math.max(a, b) / increment) * increment

	return min + Math.floor(Math.random() * ((max - min + increment) / increment)) / (1 / increment)
}

export const randomBoolean = weight => Math.random() > (weight || 0.5)

export const restrict = (num, min, max) => Math.max(min, Math.min(max, num))

export const toDegrees = radian => (180.0 / Math.PI) * radian

export const toRadians = degree => (Math.PI / 180.0) * degree
