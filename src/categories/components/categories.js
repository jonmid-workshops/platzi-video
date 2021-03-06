import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';

function Categories(props) {
	return (
		<div className="Categories">
			<Search /><br/>
			{
				props.categories.map((item) =>{
					return (
						<Category
							key={item.id}
							{...item}
							handleClick={props.handleClick} />
					)
				})
			}
		</div>
	)
}

export default Categories
