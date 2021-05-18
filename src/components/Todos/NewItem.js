import React from "react";
import { connect } from "react-redux";
import { addItem, deleteDone } from "../../redux/features/todos/todosSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  grid: {
    alignItems: "center",
    boxSizing: "border-box",
    padding: "1rem"
  },
  input: {
    width: "100%"
  }
}));

const NewItem = (props) => {
  const [entry, updateEntry] = React.useState("");
  const classes = useStyles();

  const onAdd = () => {
    if (!entry) return;

    props.addItem({
      todoItem: entry
    });
    updateEntry("");
  };

  const onDelete = () => {
    props.deleteDone();
  }

  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={8}>
        <TextField
          required 
          id="standard-textarea"
          label="add new task"
          placeholder="add new task"
          value={entry}
          onChange={e => updateEntry(e.target.value)}
          className={classes.input}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
      </Grid>
    </Grid>
  );
};

// better to use selector hook!
const mapStateToProps = state => ({
  value: state.todos,
});

const mapDispatchToProps = { addItem, deleteDone };
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);

