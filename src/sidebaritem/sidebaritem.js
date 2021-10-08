import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
// import SideBarItemComponent from './sidebaritem';
import { removeHTMLTags } from '../helpers';

class SideBarItemComponent extends React.Component {

    // We are not using states in this component 
    // so its stateless component -> but we are using props so this becomes a functional component

    render() {

        const { _index, _note, classes, selectedNoteIndex } = this.props;

        return (
            <div key={_index}
            onClick={() => this.selectNote(_note, _index)}>

                <ListItem
                    className={classes.listItem}
                    selected={selectedNoteIndex === _index}
                    alignItems='flex-start'
                    >

                    <div
                        className={classes.textSection}
                        onClick={() => this.selectNote(_note, _index)}>

                        <ListItemText
                            primary={_note.title}
                            secondary={removeHTMLTags(_note.body.substring(0, 30)) + '...'}></ListItemText>

                    </div>

                    <DeleteIcon
                        onClick={() => this.deleteNote(_note)}
                        className={classes.deleteIcon}></DeleteIcon>

                </ListItem>

            </div>
        );
    }

    selectNote = (n, i) => this.props.selectNote(n, i);

    deleteNote = (note) => {
        if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
            this.props.deleteNote(note);
        }
    }

}

export default withStyles(styles)(SideBarItemComponent);