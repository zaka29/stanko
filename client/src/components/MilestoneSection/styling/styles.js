export const styles = (side) => {
    return {
        heading: {
            display: 'inline-block',
            fontFamily: 'Tauri, sans-serif',
            fontSize: [ 1, 2, 3 ],
            color: side === 'left' ? '#FEE5A0' : '#F78A73',
            mb: 20,
            p: 10,
            bg: '#2A315A',
        },
        title: {
            color: '#2A315A',
            textTransform: 'uppercase',
            display: 'flex',
        },
        date: {
            ml: '5px',
        },
        description: {
            position: 'relative',
            color: '#2A315A',
            fontSize: [1],
            lineHeight: 1.5,
            borderLeft: '4px solid #2A315A',
            pl: '30px',
            pb: '15px',
        },
        circle: {
            display: 'block',
            height: '20px',
            width: '20px',
            borderRadius: '10px',
            backgroundColor: side === 'left' ? '#FEE5A0' : '#F78A73',
            position: 'absolute',
            top: '0px',
            left: '-12px',
        }
    }
};