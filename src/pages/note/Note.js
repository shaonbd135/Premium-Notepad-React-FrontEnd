import React from 'react';
import NoteForm from '../../components/noteForm/NoteForm';
import MyNotes from '../../components/myNotes/MyNotes';

const Note = () => {
    return (
        <div>
            <NoteForm />   
            <MyNotes />        
        </div>
    );
};

export default Note;