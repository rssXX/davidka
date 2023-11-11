import { Button, Modal, Input  } from 'antd';

const ModalWindow = ({isModalOpen, handleOk, handleCancel}) => {


    return (
        <>
            <Modal title="Заявка" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Имя" />
                <Input placeholder="Фамилия" />
                <Input placeholder="Номер" />
                <Button>Заказать звонок</Button>
            </Modal>
        </>
    );
}

export default ModalWindow;