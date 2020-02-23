import React, { useContext } from 'react'
import { Modal} from 'semantic-ui-react'
import { RootStoreContext } from '../../stores/rootStore'
import { observer } from 'mobx-react-lite';

export const ModalContainer = () => {
    const rootStore = useContext(RootStoreContext);
    const {modal: {open, body}, closeModal} = rootStore.modalStore;
    return (
        <Modal open={open} onClose={closeModal} size='mini'>
            {console.log(open)}
            <Modal.Content >
                {body}
            </Modal.Content>
        </Modal>
    )
}

export default observer(ModalContainer); 


