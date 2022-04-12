import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

const menu = (props) => {
	return (
			<ul className="sidebar-menu">
				<MenuItem path='#' label='Dashboard' icon='dashboard' />
				<MenuTree label='Cadastro' icon='edit' arrow={ `${props.active ? 'fa-angle-down' : 'fa-angle-left'}`}>
					<MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd'/>
				</MenuTree>
			</ul>
	)
}

export default menu
