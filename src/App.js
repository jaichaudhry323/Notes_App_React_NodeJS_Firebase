import React from 'react';
// import logo from './logo.svg';
import './App.css';
import EditorComponent from './editor/editor';
import SidebarComponent from './sidebar/sidebar';

// const firebase = require('firebase');
import { firebase } from '@firebase/app';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render() {
    const { classes } = this.props;

    console.log("App.js classes");
    console.log(classes);

    return (
      <div className="app-container">
        
        {/* Always show the sidebar component */}
        <SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}></SidebarComponent>
          
        {
          // we show editor when a note is selected
          this.state.selectedNote ?
            <EditorComponent
              selectedNoteIndex={this.state.selectedNoteIndex}
              selectedNote={this.state.selectedNote}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}></EditorComponent>
            : null
        }      </div>
    );
  }

  componentDidMount = () => {
    // go into firebase and get all notes
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        console.log(serverUpdate.docs)
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes)
        this.setState({ notes: notes });
      });
  }

  // we are gonna pass addNewNote deleteNote functions that are defined here

  selectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
    console.log(index);
  }

  noteUpdate = (id, noteObj) => {
    firebase
      .firestore()
      .collection("notes")
      .doc(id)
      .update(
        {
          title: noteObj.title,
          body: noteObj.body,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
      )
  }

  newNote = async (title) => {
    const note = {
      title: title,
      body: ''
    };

    const newFromDB = await firebase
      .firestore()
      .collection("notes")
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });

    //this.state.notes.filter() returns an array 
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });

  }

  // async bcoz of setState
  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);

    // this.setState({selectedNoteIndex:null,selectedNote:null});

    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });

    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }
    else {
      this.state.notes.length > 1 && this.state.selectedNoteIndex < this.state.notes.length ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex + 1], this.state.selectedNoteIndex + 1) :
        this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection("notes")
      .doc(note.id)
      .delete();

  }

}
export default App;
