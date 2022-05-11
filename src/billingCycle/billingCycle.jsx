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
import { create, update, remove, init } from './billingCycleActions';

class BillingCycle extends Component {
	componentDidMount() {
		// this.props.selectTab('tabList');
		// this.props.showTabs('tabList', 'tabCreate');
		this.props.init();
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
								<Form
									onSubmit={this.props.create}
									submitColor="primary"
									submitLabel="Incluir"
									cancelColor="default"
									cancelLabel="Cancelar"
								/>
							</TabContent>
							<TabContent id="tabUpdate">
								<Form
									onSubmit={this.props.update}
									submitColor="info"
									submitLabel="Atualizar"
									cancelColor="default"
									cancelLabel="Cancelar"
								/>
							</TabContent>
							<TabContent id="tabDelete">
								<Form
									onSubmit={this.props.remove}
									readOnly={true}
									submitColor="danger"
									submitLabel="Excluir"
									cancelColor="default"
									cancelLabel="Cancelar"
								/>
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{ init, selectTab, showTabs, create, update, remove },
		dispatch
	);

export default connect(null, mapDispatchToProps)(BillingCycle);
