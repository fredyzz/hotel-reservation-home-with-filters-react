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
			<div className="logo">
				<img
					src="./components/static/images/hoteles-logo.png"
					alt="hoteles logo"
					width="70"
				/>
			</div>
			<div className="dates">
				<h1>Hoteles</h1>
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
