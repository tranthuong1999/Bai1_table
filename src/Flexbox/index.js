

const index = (props) => {
    const listData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
            listData.map(e => {
                return <div style={{ width: 50, height: 30, backgroundColor: 'green', marginRight: 10, marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{e}</div>
            })
        }
    </div>
}

export default index;