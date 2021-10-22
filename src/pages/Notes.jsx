import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE',
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container sx={{ pt: 6, pl: 30 }} disableGutters maxWidth="xl">
      <Masonry columns={{ lg: 3, md: 4 }} spacing={3}>
        {notes.map((note) => (
          <MasonryItem key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </MasonryItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
