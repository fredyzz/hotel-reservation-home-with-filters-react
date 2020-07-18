const Header = ({ initDate, finishDate }) => {
	const initDay = dayDictionary[initDate.getDay()]
	const initDayNumber = initDate.getDate()
	const initMonth = monthDictionary[initDate.getMonth()]

	let finishDay
	let finishDayNumber
	let finishMonth

	if (finishDate) {
		finishDay = dayDictionary[finishDate.getDay()]
		finishDayNumber = finishDate.getDate()
		finishMonth = monthDictionary[finishDate.getMonth()]
	}

	return (
		<div className="header">
			<div>
				<h1>Hoteles</h1>
			</div>
			<div className="dates">
				<p>
					Desde el{' '}
					<span>{`${initDay}, ${initDayNumber} de ${initMonth} `}</span>
				</p>
				{finishDate && (
					<p>
						hasta el{' '}
						<span>{`${finishDay}, ${finishDayNumber} de ${finishMonth}`}</span>
					</p>
				)}
			</div>
		</div>
	)
}
