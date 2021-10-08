import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import React from 'react';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SideBarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            addingNote: false,
            title: null
        }
    }

    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        if (notes) {
            return (
                <div className={classes.sidebarContainer}>

                    {/* Button to add New Note */}
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? "Cancel" : "New Note"}</Button>
                    
                    {
                        // When NEW NOTE button is clicked state is changed and hence re-rendering
                        this.state.addingNote ?
                            <div>
                                <input type="text"
                                    className={classes.newNoteInput}
                                    placeholder="Enter Note Title"
                                    onKeyUp={(e) => { this.updateTitle(e.target.value) }}>
                                </input>

                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Submit Note</Button>
                            </div>
                            :
                            null
                    }

                    <List className = {classes.listContainer}>
                        {
                            // map all the notes here and show as list
                            notes.map((_note, _index) => {

                                return (
                                    <div key={_index}>
                                        <SideBarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>

                                        </SideBarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )

                            })
                        }
                    </List>

                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }

    // creating selectNote function which accepts (n,i) note and index 
    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);

    updateTitle = (text) => {
        console.log("updateTitle text " + text);
        this.setState({ title: text });
    }

    newNoteBtnClick = () => {
        console.log("New Btn clicked");
        this.setState({ addingNote: !this.state.addingNote });
    }

    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
}

export default withStyles(styles)(SidebarComponent);