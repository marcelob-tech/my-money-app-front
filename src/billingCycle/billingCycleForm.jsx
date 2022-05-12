import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import LabelAndInput from '../common/form/labelAndinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleActions';
import CreditList from './creditList';

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit, credits } = this.props;
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
					<CreditList
						cols="12 6"
						list={credits}
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
const mapStateToProps = (state) => ({ credits: selector(state, 'credits') });
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
