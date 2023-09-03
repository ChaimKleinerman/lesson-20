import  { useState, useEffect } from 'react';
function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const formattedTime = `${currentTime.getHours()}:${padZero(currentTime.getMinutes())}:${padZero(currentTime.getSeconds())}`;
    return (
        <div className="Footer">
            <h1>Chaim Kleinerman</h1>
            <h2 id='watch'>{formattedTime}</h2>
        </div>
    );
}
function padZero(number:number) {
    return number.toString().padStart(2, '0');
}
export default Footer;