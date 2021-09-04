

const index = (props) => {
    return <div style={{ with: 500, height: 300, backgroundColor: '#f08361', paddingTop: 20, display: 'flex', justifyContent: 'center' }}>

        <div className="canculator">
            <div className="canculator_top">
                <div className="canculator_value">0</div>
            </div>
            <div className="canculator_bottom">
                <div className="canculator_bottom_left">
                    <div className="canculator_bottom_left_row">
                        <div className="canculator_bottom_left_row_item item_border_right">C</div>
                        <div className="canculator_bottom_left_row_item item_border_right">+/-</div>
                        <div className="canculator_bottom_left_row_item ">%</div>
                    </div>
                    <div className="canculator_bottom_left_row">
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">7</div>
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">8</div>
                        <div className="canculator_bottom_left_row_item bg_white">9</div>
                    </div>
                    <div className="canculator_bottom_left_row">
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">4</div>
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">5</div>
                        <div className="canculator_bottom_left_row_item bg_white">6</div>
                    </div>
                    <div className="canculator_bottom_left_row">
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">3</div>
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">2</div>
                        <div className="canculator_bottom_left_row_item bg_white">1</div>
                    </div>
                    <div className="canculator_bottom_left_row_last">
                        <div className="canculator_bottom_left_row_item bg_white item_border_right border_bottom_left">0</div>
                        <div className="canculator_bottom_left_row_item bg_white item_border_right">.</div>
                        <div className="canculator_bottom_left_row_item bg_white">{'-<'}</div>
                    </div>
                </div>
                <div className="canculator_bottom_right">
                    <div className="canculator_bottom_right_item">/</div>
                    <div className="canculator_bottom_right_item">x</div>
                    <div className="canculator_bottom_right_item">-</div>
                    <div className="canculator_bottom_right_item">+</div>
                    <div className="canculator_bottom_right_item canculator_bottom_right_item_last">=</div>
                </div>
            </div>
        </div>
    </div>
}

export default index;