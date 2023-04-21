import React from "react";
import {Modal} from "react-bootstrap";
import { FormTask } from "./FormTask";

export const UpdateTask = ({isOpen, onClose, tareaEdit}) => {
   
   if(!isOpen){
    return null;
   }

    return (
        <>
            <>
                <Modal show={isOpen} className="">
                    <Modal.Header className="bg-light">
                        <Modal.Title className="text-dark bg-light">ID: {tareaEdit._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-light">
                        <br />
                    </Modal.Body>
                        <FormTask
                            userProp={tareaEdit}
                            titleButton="Actualizar"
                            option={2}
                        />
                        <button className="btn btn-danger" onClick={onClose}>
                            Cerrar
                        </button>
                    <Modal.Footer className="bg-light">
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}
