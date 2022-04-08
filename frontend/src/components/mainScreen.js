import React from 'react';
import { Row } from 'react-bootstrap';
import './mainScreen.css' ; 


const mainScreen = (title , children) => {
    return (
        <div className='mainback' >
            <container>
                <Row>
                    <div className='page'>
                        {
                            title && (
                                <>
                                    <h1 className='heading'> {title} </h1>
                                    <hr />
                                </>
                            )}
                            {children}

                    </div>
                </Row>
            </container>
        </div>
    )
}

export default mainScreen