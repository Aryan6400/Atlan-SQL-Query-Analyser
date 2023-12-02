import React, { useState } from 'react';
import Modal from 'react-modal';
import LineChart from './GraphComponents/LineChart';
import { usePopup } from '../context/PopupContext';
import AreaChart from './GraphComponents/AreaChart';
import BarChart from './GraphComponents/BarChart';
import BubbleChart from './GraphComponents/BubbleChart';

const ImagePopup = () => {
    const {popup, setPopup, chartValue} = usePopup();
    const closeModal = () => {
        setPopup(false);
    };
    
    return (
        <div>
            <Modal
                isOpen={popup}
                onRequestClose={closeModal}
                style={{
                    content: {
                        width: '60%',
                        height: '70%',
                        margin: 'auto',
                    },
                }}
            >
                <div>
                    <button onClick={closeModal} style={{ float: 'right' }}>
                        Close
                    </button>
                    <h2>{chartValue} Graph</h2>
                    {chartValue=="Bar" && <BarChart />}
                    {chartValue=="Line" && <LineChart />}
                    {chartValue=="Area" && <AreaChart />}
                    {chartValue=="Bubble" && <BubbleChart />}
                </div>
            </Modal>
        </div>
    );
};
export default ImagePopup;
