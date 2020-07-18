const getFullDate = (date) => {
	if (date === undefined) {
		return
	}
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()

	if (day.toString().length === 1) {
		day = '0' + day
	}
	if (month.toString().length === 1) {
		month = '0' + month
	}

	let fullDate = `${year}-${month}-${day}`
	return fullDate
}

const getTomorrowDate = (date) => new Date(date.valueOf() + 86400000)
