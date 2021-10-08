import React from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ReactQuill from 'react-quill';
import debounce from '../helpers';

class EditorComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }

    componentDidMount() {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }

    componentDidUpdate() {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            });
        }
    }

    render() {
        const { classes } = this.props;

        console.log("classes");
        console.log(classes);

        return (
            <div className={classes.editorContainer} >
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <input
                    className={classes.titleInput}
                    placeholder="Note title..."
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}>
                </input>

                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>
                </ReactQuill>

            </div>
        );
    }

    // When NOTE Description is changed then we update the state variable text
    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    };

    // When NOTE Name/Title is changed then again update the respective state variable
    updateTitle = async (val) => {
        await this.setState({ title: val });
        this.update();
    };

    // Update is done by saving in the FIREBASE Database so call this function after few seconds say 1
    update = debounce(() => {
        console.log("Updating");

        this.props.noteUpdate(
            this.state.id,
            { title: this.state.title, body: this.state.text }
        );

    }, 1000);

}

export default withStyles(styles)(EditorComponent);
