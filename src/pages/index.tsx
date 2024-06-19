import React, { useState } from 'react';
import styled from "styled-components";
import Modal from '../components/modal';

const StyleWarp = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyleContainer = styled.div`
    display:block;
`;

const Line = styled.div`
    padding : 5px;
`;

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Modal Open</button>
            {isModalOpen && <Modal closeModal={closeModal} />}
        </div>
    );
};

export default Main;
