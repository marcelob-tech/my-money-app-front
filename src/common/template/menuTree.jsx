import React from 'react';

const menuTree = (props) => {
	let active = false;

	// const { isArrowActive, setArrowActive} = useState(false);

	function clickActive() {
		console.log('ativando...', active);
		return (active = !active);
	}

	return (
		<li className="treeview">
			<a href onClick={() => clickActive()}>
				<i className={`fa fa-${props.icon}`}></i> {props.label}
				<i className={'fa fa-angle-left pull-right'}></i>
			</a>
			<ul className="treeview-menu">{props.children}</ul>
		</li>
	);
};

export default menuTree;
