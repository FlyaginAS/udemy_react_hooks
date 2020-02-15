import  React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    const [value, setValue] = useState(0);
    const [visible, setVisible]= useState(true);



    if(visible){
        return (
            <div>
                <button
                    onClick={()=> setValue((v)=> v+1)}
                >+</button>
                <button
                    onClick={()=>setVisible(false)}
                >hide</button>
                <Notification />
            </div>
        );
    } else {
        return <button onClick={()=>setVisible(true)}>show</button>
    }
};

const HookCounter = ({value})=>{
    //componentDidMount
    useEffect(()=>{
        console.log('did mount');
        return ()=>console.log('unmount');
    }, []);

    useEffect(()=> console.log('did update'));



    return <p>{value}</p>;
};

const Notification = ()=>{
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        let id=setTimeout(()=>{
            setVisible(false);
        }, 1500);

        return ()=> clearTimeout(id);
    }, []);

    return visible ?   <div><p>Hello</p></div> : null;
};

ReactDOM.render(<App/>, document.querySelector('#root'));