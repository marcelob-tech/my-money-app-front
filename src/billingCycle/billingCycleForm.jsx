import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndinput from '../common/form/labelAndinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleActions';

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field
						name="name"
						component={labelAndinput}
						label="Nome"
						cols="12 4"
						placeholder="Informe o nome"
						readOnly={this.props.readOnly}
					/>
					<Field
						name="month"
						component={labelAndinput}
						label="Mês"
						cols="12 4"
						type="number"
						placeholder="Informe o mês"
						readOnly={this.props.readOnly}
					/>
					<Field
						name="year"
						component={labelAndinput}
						label="Ano"
						cols="12 4"
						type="number"
						placeholder="Informe o ano"
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

// const mapStateToProps = (state) => ({ init: state.billingCycleA.init });
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
