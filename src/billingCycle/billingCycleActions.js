import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = {};

export function getList() {
	const request = axios.request(`${BASE_URL}/billingCycles`);
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request,
	};
}

export function create(values) {
	return (dispatch) => {
		axios
			.post(`${BASE_URL}/billingCycles`, values)
			.then((resp) => {
				console.log('resp###', resp);
				toastr.success('Sucesso', 'Operação Realizada com sucesso.');
				console.log('dpatch', dispatch);
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
	return [
		selectTab('tabUpdate'),
		showTabs('tabUpdate'),
		initialize('billingCycleForm', billingCycle),
	];
}

export function init() {
	return [
		// resetForm('billingCycleForm'),
		getList(),
		selectTab('tabList'),
		showTabs('tabList', 'tabCreate'),
		initialize('billingCycleForm', INITIAL_VALUES),
	];
}
