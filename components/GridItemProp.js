const GridItemProp = ({ iconSrc, iconAlt, text }) => {
	return (
		<div className="hotelGridItem__prop">
			<div className="prop__icon">
				<img className="icon" src={iconSrc} alt={`${iconAlt} icon`} />
			</div>
			<div className="prop__text">
				<p>{text}</p>
			</div>
		</div>
	)
}
