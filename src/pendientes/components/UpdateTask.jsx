import React from "react";
import { Modal } from "react-bootstrap";
import { FormTask } from "./FormTask";

export const UpdateTask = ({ isOpen, onClose, tareaEdit }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    <Modal show={isOpen} className="">
                        <Modal.Header className="">
                            <Modal.Title className="text-dark bg-light">ID: {tareaEdit._id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="">
                            <FormTask
                                tareaProp={tareaEdit}
                                titleButton="actualizar"
                                option={2}
                                id={tareaEdit.id}
                            />
                            <button className="btn btn-danger ms-4" onClick={onClose}>
                                Cerrar
                            </button>
                        </Modal.Body>
                        <Modal.Footer className="bg-light">
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}
