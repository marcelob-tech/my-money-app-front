import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {
	calculateSummary() {
		const sum = (t, v) => t + v
		return {
			sumOfCredits: this.props.credits.map((c) => +c.value || 0).reduce(sum, 0),
			sumOfDebits: this.props.debits.map((d) => +d.value || 0).reduce(sum, 0),
		}
	}

	render() {
		const { handleSubmit, readOnly, credits, debits } = this.props
		console.log('props#', this.props)
		const { sumOfDebits, sumOfCredits } = this.calculateSummary()
		console.log('sumDebits', sumOfDebits)
		console.log('sumCredits', sumOfCredits)
		return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Field
						name='name'
						component={LabelAndInput}
						readOnly={readOnly}
						label='Nome'
						cols='12 4'
						placeholder='Informe o nome'
					/>
					<Field
						name='month'
						component={LabelAndInput}
						type='number'
						readOnly={readOnly}
						label='Mês'
						cols='12 4'
						placeholder='Informe o mês'
					/>
					<Field
						name='year'
						component={LabelAndInput}
						type='number'
						readOnly={readOnly}
						label='Ano'
						cols='12 4'
						placeholder='Informe o ano'
					/>
					<Summary credit={sumOfCredits} debit={sumOfDebits} />
					<ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' />
					<ItemList cols='12 6' list={debits} readOnly={readOnly} field='debits' legend='Débitos' showStatus={true} />
				</div>
				<div className='box-footer'>
					<button type='submit' className={`btn btn-${this.props.submitColor}`}>
						{this.props.submitLabel}
					</button>
					<button type='button' className={`btn btn-${this.props.cancelColor}`} onClick={this.props.init}>
						{this.props.cancelLabel}
					</button>
				</div>
			</form>
		)
	}
}

BillingCycleForm = reduxForm({
	form: 'billingCycleForm',
	destroyOnUnmount: false,
})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = (state) => ({
	credits: selector(state, 'credits'),
	debits: selector(state, 'debits'),
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
