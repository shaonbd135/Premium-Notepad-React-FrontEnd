import React, { useContext } from 'react';
import { userContext } from '../../contexts/Context';

const MyNotes = () => {
    const [ user,setUser ] = useContext(userContext);
    const notes = user.Notes
    
    console.log(user.Notes)
    

    return (
        <div className='container mt-5'>
           <div className='row'>
           <h1>My Notes</h1>
            {
                (
                    notes.map((note,index) => (
                       <div key={index} className='col-md-4'>
                         <div  className='card mt-5 bg-dark text-white' style={{width: '18rem', minHeight: '12rem'}}>
                            <div className='card-body'>
                                <h5 className='card-title text-center mb-3'>{note.title}</h5>
                                <p className='card-text'>{note.description}</p>
                            </div>
                        </div>
                       </div>
                    ))
                ) 
            }
            

           </div>
            
            
            
        </div>
    );
};

export default MyNotes;