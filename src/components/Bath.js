import React, { useState, useEffect } from 'react';

export default function Bath() {
    const [bathState, setBathState] = useState(null);

    const [waterLevel, setWaterLevel] = useState(0);

    const changeWaterLevel = () => {
        const amount = bathState === 'increase' ? 1 : -1;
        const newLevel = Math.max(0, Math.min(5, waterLevel + amount));
        setWaterLevel(newLevel);
    }


    const loadWaterBlocks = () => {
        const blocks = [];

        for (let i=0; i<waterLevel; i++) {
            blocks.push(
                <div className="w-full bg-blue-500 water-item" key={i} />
            );
        }

        return blocks;
    }

    useEffect(() => {
        if (Boolean(bathState)) changeWaterLevel();
    }, [bathState]);

    useEffect(() => {
        if (waterLevel > 0 && waterLevel < 5) {
            setTimeout(() => {
                changeWaterLevel();
            }, 2000);
        } else {
            setTimeout(() => {
                setBathState(null);
            }, 2000);
        }
    }, [waterLevel]);

    return (
        <div className="p-5">
            <div className="mb-5">
                <button
                    className={`px-3 py-2 text-white bg-blue-500 rounded ${bathState ? 'bg-opacity-50' : ''}`}
                    onClick={() => setBathState('increase')}
                    disabled={Boolean(bathState)}
                >Increase Water Level</button>
                <button
                    className={`px-3 py-2 text-white bg-red-500 rounded ml-3 ${bathState ? 'bg-opacity-50' : ''}`}
                    onClick={() => setBathState('decrease')}
                    disabled={Boolean(bathState)}
                >Decrease Water Level</button>
            </div>

            <div className={`w-40 h-40 relative flex flex-col items-center justify-end border border-gray-500 ${bathState}`}>
                {loadWaterBlocks()}

                <div className="w-full h-8 absolute top-16 left-0 flex justify-center items-center font-bold">
                    Level: {waterLevel}
                </div>
            </div>
        </div>
    );
}