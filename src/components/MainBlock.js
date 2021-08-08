import React from 'react'

const MainBlock = () => {
    return (
        <div className="block-container">
            <div className="block-row">
                <div className="quarter-block top-left">
                    <div className="label">Code Block</div>
                </div>
                <div className="quarter-block top-right">
                    <div className="label">Code Block</div>
                </div>
            </div>
            <div className="block-row">
                <div className="quarter-block bottom-left">
                    <div className="label">Code Block</div>
                </div>
                <div className="quarter-block bottom-right">
                    <div className="label">Code Block</div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock
