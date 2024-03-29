import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { FormContainer } from './styles';

interface NovoModalProps {
    visibleNovoModal: boolean;
    fecharModal: () => void;
}

export function NovoModal(props: NovoModalProps) {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function onSubmitModal(event: FormEvent) {
        //não deixa com que o formulario de reload na pagina
        event.preventDefault();
    }

    return (
        <Modal
            isOpen={props.visibleNovoModal}
            onRequestClose={() => props.fecharModal()}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => props.fecharModal()}
                className="react-modal-close"
            >
                <FaWindowClose />
            </button>

            <FormContainer onSubmit={onSubmitModal} >
                <h2>Cadastrar Tarefa</h2>

                <input
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <textarea
                    placeholder='Descrição'
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <button
                    type='submit'
                >
                    Cadastrar
                </button>
            </FormContainer>

        </Modal>
    )
}
