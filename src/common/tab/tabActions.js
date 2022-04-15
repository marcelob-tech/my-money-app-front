export function selectTab(tabId) {
	console.log('tabSelecionada: ', tabId);
	return {
		type: 'TAB_SELECTED',
		payload: tabId,
	};
}
