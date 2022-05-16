import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import LabelAndInput from '../common/form/labelAndinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleActions';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {
	calculateSummary() {
		const sum = (t, v) => t + v;
		return {
			sumOfCredits: this.props.credits
				.map((c) => +c.value || 0)
				.reduce(sum),
			sumOfDebits: this.props.debits
				.map((d) => +d.value || 0)
				.reduce(sum),
		};
	}

	render() {
		const { handleSubmit, credits, debits } = this.props;
		const { sumOfDebits, sumOfCredits } = this.calculateSummary();
		return (
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field
						name="name"
						component={LabelAndInput}
						label="Nome"
						cols="12 4"
						placeholder="Informe o nome"
						readOnly={this.props.readOnly}
					/>
					<Field
						name="month"
						component={LabelAndInput}
						label="Mês"
						cols="12 4"
						type="number"
						placeholder="Informe o mês"
						readOnly={this.props.readOnly}
					/>
					<Field
						name="year"
						component={LabelAndInput}
						label="Ano"
						cols="12 4"
						type="number"
						placeholder="Informe o ano"
						readOnly={this.props.readOnly}
					/>
					<Summary credits={sumOfCredits} debits={sumOfDebits} />
					<ItemList
						cols="12 6"
						list={credits}
						field="credits"
						legend="Créditos"
						readOnly={this.props.readOnly}
					/>
					<ItemList
						cols="12 6"
						list={debits}
						field="debits"
						legend="Débitos"
						showStatus={true}
						readOnly={this.props.readOnly}
					/>
				</div>
				<div className="box-footer">
					<button
						className={`btn btn-${this.props.submitColor}`}
						type="submit"
					>
						{this.props.submitLabel}
					</button>
					<button
						onClick={this.props.init}
						type="button"
						className={`btn btn-${this.props.cancelColor}`}
					>
						{this.props.cancelLabel}
					</button>
				</div>
			</form>
		);
	}
}

BillingCycleForm = reduxForm({
	form: 'billingCycleForm',
	destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapStateToProps = (state) => ({
	credits: selector(state, 'credits'),
	debits: selector(state, 'debits'),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
