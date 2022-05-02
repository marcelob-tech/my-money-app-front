import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css';
import React from 'react';
import ReduxToastr from 'react-redux-toastr';

const messages = (props) => {
	return (
		<ReduxToastr
			timeOut={5000}
			newestOnTop={false}
			position={'top-right'}
			preventDuplicates={true}
			transitionIn={'fadeIn'}
			transitionOut={'fadeOut'}
			progressBar
		/>
	);
};

export default messages;
