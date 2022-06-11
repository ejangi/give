import React, { useEffect, useState } from 'react'

export default function GivingModal(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.show);
    }, [props]);

    useEffect(() => {
        let bodyTag = document.getElementsByTagName('body')[0];
        let givingModal = document.getElementsByClassName('giving-modal')[0];
        bodyTag.appendChild(givingModal);
      }, []);

    return (
        <div id="giving-modal" 
             className="giving-modal" 
             tabIndex="-1" 
             role="dialog" 
             aria-hidden={show === true ? false : true}>
            <div className="container">
                I am {show === true ? 'visible' : 'hidden'}
            </div>
        </div>
    )
}
