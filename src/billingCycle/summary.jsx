import React from 'react';
import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

const summary = (props) => {
	const { credits, debits } = props;
	return (
		<Grid cols="12">
			<fieldset>
				<legend>Resumo</legend>
				<Row>
					<ValueBox
						cols="12 4"
						color="green"
						icon="bank"
						value={`R$ ${credits}`}
						text="Total de Créditos"
					/>
					<ValueBox
						cols="12 4"
						color="red"
						icon="credit-card"
						value={`R$ ${debits}`}
						text="Total de Débitos"
					/>
					<ValueBox
						cols="12 4"
						color="blue"
						icon="money"
						value={`R$ ${credits - debits}`}
						text="Valor consolidado"
					/>
				</Row>
			</fieldset>
		</Grid>
	);
};

export default summary;
