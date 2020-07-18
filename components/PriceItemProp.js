const PriceItemProp = ({ price }) => {
	const maxRank = 4
	return (
		<div className="hotelGridItem__price">
			<p>
				<b>{' $ '.repeat(price)}</b>
				<span className="disabled">{' $ '.repeat(maxRank - price)}</span>
			</p>
		</div>
	)
}
