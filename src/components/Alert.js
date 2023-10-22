import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <b>{props.alert.type} : {props.alert.msg}</b>
        </div>
    )
}
