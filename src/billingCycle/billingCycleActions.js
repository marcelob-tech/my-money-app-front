import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = { credits: [{}], debits: [{}] };

export function getList() {
	const request = axios.request(`${BASE_URL}/billingCycles`);
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request,
	};
}

export function create(values) {
	return submit(values, 'post');
}

export function update(values) {
	return submit(values, 'put');
}

export function remove(values) {
	return submit(values, 'delete');
}

function submit(values, method) {
	const id = values._id ? values._id : '';
	return (dispatch) => {
		axios[method](`${BASE_URL}/billingCycles/${id}`, values)
			.then((resp) => {
				toastr.success('Sucesso', 'Operação Realizada com sucesso.');
				dispatch(init());
			})
			.catch((e) => {
				console.log('lisError', e.response.data);
				e.response.data.errors.forEach((error) => {
					toastr.error('Erro', error);
				});
			});
	};
}

export function showUpdate(billingCycle) {
	if (billingCycle.credits.length === 0) {
		billingCycle.credits.push(INITIAL_VALUES.credits);
	}
	if (billingCycle.debits.length === 0) {
		billingCycle.debits.push(INITIAL_VALUES.debits);
	}
	return [
		selectTab('tabUpdate'),
		showTabs('tabUpdate'),
		initialize('billingCycleForm', billingCycle),
	];
}

export function showDelete(billingCycle) {
	return [
		selectTab('tabDelete'),
		showTabs('tabDelete'),
		initialize('billingCycleForm', billingCycle),
	];
}

export function init() {
	return [
		// resetForm('billingCycleForm'),
		selectTab('tabList'),
		showTabs('tabList', 'tabCreate'),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUES),
	];
}
