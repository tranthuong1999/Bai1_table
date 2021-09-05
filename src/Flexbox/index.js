import { useState, useEffect } from 'react';
import ArithMeticComponent from './ArithMeticComponent';




const Flexbox = (props) => {
    const [isClickLastItem, setIsClickLastItem] = useState(false);

    const handleClickLastItem = () => {
        console.log('handleClickLastItem');
        setIsClickLastItem(true);
        localStorage.setItem('IsClickLastItem', true)
    }

    // = component didmount, unmount, willmount
    useEffect(() => {
        const isClickLastItemLocal = localStorage.getItem('IsClickLastItem');
        console.log('useEffect isClickLastItemLocal:', isClickLastItemLocal);
        setIsClickLastItem(isClickLastItemLocal);
    }, [isClickLastItem])

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
                    <ArithMeticComponent title='/' onClick={() => console.log('Print /')} />
                    <ArithMeticComponent title='x' onClick={() => console.log('Print X')} />
                    <ArithMeticComponent title='-' onClick={() => console.log('Print -')} />
                    <ArithMeticComponent title='+' onClick={() => console.log('Print +')} />
                    <ArithMeticComponent
                        title='>='
                        onClick={handleClickLastItem}
                        isLastItem
                    // isLastItem={true}
                    />
                </div>
            </div>
        </div>
        <div>
            {/* <h6>{(isClickLastItemLocal || isClickLastItem) ? 'Clicked' : 'Not Click'}</h6> */}
            <h6>{(isClickLastItem) ? 'Clicked' : 'Not Click'}</h6>
        </div>
    </div>
}

export default Flexbox;