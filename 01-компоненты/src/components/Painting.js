import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
console.log(defaultImage);

export default function Painting (props) {

	const { 
		imageUrl = defaultImage, 
		title, 
		authorName, 
		profileUrl, 
		price,
		quantity 
	} = props;

return	<div>
						<img src={imageUrl} alt={title} width="480" />
						<h2>{title}</h2>
						<p>Автор: <a href={profileUrl}>{authorName}</a></p>
						<p>Цена: {price} кредитов</p>
						<p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
						<button type="button">Добавить в корзину</button>
        </div>    
}

Painting.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	authorName: PropTypes.string,
	profileUrl: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number
};