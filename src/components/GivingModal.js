import React, { useEffect, useState } from 'react'

export default function GivingModal(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    function handleClose() {
        setShow(false);
        if (props.hide) {
            props.hide(false);
        }
    }

    return (
        <div id="giving-modal" 
             className="giving-modal"
             tabIndex="-1" 
             role="dialog" 
             aria-hidden={show === true ? false : true}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        { props.defaultTitle ? <h2>{props.defaultTitle}</h2> : null }
                        <button type="button" className="btn btn-close" onClick={handleClose}>&#215;</button>
                    </div>
                    <div className="modal-body">
                        I am {show === true ? 'visible' : 'hidden'}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .giving-modal {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: white;
                z-index: 99;
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                align-content: stretch;
                align-items: stretch;
                transition: transform .2s ease-in-out, opacity .2s ease-in-out;
            }

            @media (min-width: 720px) {
                .giving-modal {
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }
            }

            .giving-modal[aria-hidden="true"] {
                display: none;
            }

            .giving-modal .modal-dialog {
                display: flex;
                flex-direction: column;
                justify-content: stretch;
                align-content: stretch;
                align-items: stretch;
                height: 100%;
                background-color: $color-white;
                box-shadow: 0px 3px 30px rgba(0,0,0,0.6);    
            }

            @media (min-width: 720px) {
                .giving-modal .modal-dialog {
                    width: 600px;
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
            }
            
            .giving-modal .modal-content {
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-between;
                align-content: stretch;
                align-items: stretch;
            }

            .giving-modal .modal-header {
                display: flex;
                justify-content: space-between;
                border-bottom: 3px solid #CCC;
                padding: 30px;
            }

            .giving-modal h2 {
                margin: 0;
            }

            .giving-modal .btn-close {
                box-shadow: none;
                margin-top: -30px;
                margin-right: -30px;
                margin-bottom: -30px;
                padding-left: 30px;
                padding-right: 30px;
                border-radius: 0;
                color: #333;
                background: none;
                font-size: 18pt;
            }

            .giving-modal .btn-close:hover,
            .giving-modal .btn-close:active {
                color: black;
            }

            .giving-modal .modal-body {
                display: block;
                padding: 30px;
                height: 100%;
            }

            .giving-modal .modal-footer {
                display: flex;
                justify-content: space-between;
                border-top: 3px solid #ccc;
                padding: 30px;
            }

            .giving-modal .btn-primary {
                margin-left: auto;
            }
            `}</style>
        </div>
    )
}
