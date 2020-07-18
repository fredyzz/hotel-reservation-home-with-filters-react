// ----- Date helpers -----

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

// ----- Filters -----
const applyFilters = (hotels, filters, setFilteredHotels) => {
	const newFilteredHotels = hotels
		.filter(
			//InitDate filter
			(hotel) => {
				return (
					hotel.availabilityFrom <= filters.initDate.valueOf() &&
					hotel.availabilityTo >= filters.initDate.valueOf()
				)
			}
		)
		.filter(
			//FinishDate filter
			(hotel) =>
				hotel.availabilityTo >= filters.finishDate.valueOf() &&
				hotel.availabilityFrom <= filters.finishDate.valueOf()
		)
		.filter(
			//Country filter
			(hotel) => {
				if (!filters.country) {
					return true
				}
				return hotel.country === filters.country
			}
		)
		.filter(
			//Price filter
			(hotel) => {
				if (!filters.price) {
					return true
				}
				return hotel.price.toString() === filters.price
			}
		)
		.filter(
			//Size filter
			(hotel) => {
				switch (parseInt(filters.size)) {
					case 0:
						return true
					case 1:
						return hotel.rooms <= 10
					case 2:
						return hotel.rooms > 10 && hotel.rooms <= 20
					case 3:
						return hotel.rooms > 20
					default:
						break
				}
			}
		)

	setFilteredHotels(newFilteredHotels)
}
