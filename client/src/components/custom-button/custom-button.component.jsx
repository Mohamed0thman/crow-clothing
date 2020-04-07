import React from 'react'

import { CustomButtonContainer } from './custom-button.style'

const customBotton = ( {children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default customBotton;