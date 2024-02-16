import './contact.css';
const Spinner = ({ size,text }) => {
    
    const arr= Array.from(text);

    return (
        <div className='contact-title' style={{ fontSize: `${size}px` }}>
            {arr.map((index, i) => (
                (index === ' ') ?
                    <span key={i}>&nbsp;</span>
                    :
                    <span key={i} style={{ '--i': i }}>{index}</span>
            ))}
        </div>
    );
};
export default Spinner;