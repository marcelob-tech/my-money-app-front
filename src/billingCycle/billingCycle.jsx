import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader';
import TabsContent from '../common/tab/tabsContent';
import TabContent from '../common/tab/tabContent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTab, showTabs } from '../common/tab/tabActions';
import List from '../billingCycle/billingCycleList';
import Form from './billingCycleForm';
import { create } from './billingCycleActions';

class BillingCycle extends Component {
	componentDidMount() {
		this.props.selectTab('tabList');
		this.props.showTabs('tabList', 'tabCreate');
	}

	render() {
		return (
			<div>
				<ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeader
								label="Listar"
								icon="file-text-o"
								target="tabList"
							/>
							<TabHeader
								label="Incluir"
								icon="plus"
								target="tabCreate"
							/>
							<TabHeader
								label="Alterar"
								icon="pencil"
								target="tabUpdate"
							/>
							<TabHeader
								label="Excluir"
								icon="trash-o"
								target="tabDelete"
							/>
						</TabsHeader>
						<TabsContent>
							<TabContent id="tabList">
								<List />
							</TabContent>
							<TabContent id="tabCreate">
								<Form onSubmit={create} />
							</TabContent>
							<TabContent id="tabUpdate">
								<h1>tabUpdate</h1>
							</TabContent>
							<TabContent id="tabDelete">
								<h1>tabDelete</h1>
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
