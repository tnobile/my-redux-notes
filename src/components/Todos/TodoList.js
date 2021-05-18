import React from "react";
import { connect } from "react-redux";
import { updateList} from "../../redux/features/todos/todosSlice";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { useSelector, shallowEqual } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "400px",
    backgroundColor: theme.palette.background.paper,
    margin: "auto"
  },
  strike: {
    textDecoration: "line-through;"
  }
}));

const ToDoList = ({ dispatch }) => {
  const classes = useStyles();

  const { todos } = useSelector(store => store, shallowEqual);

  const handleToggle = value => () => {
    dispatch(updateList({ itemIndex: value }));
  };

  console.log('todos', todos);

  const listItems = todos.list.map(item => {
    const labelId = `checkbox-list-secondary-label-${item.itemId}`;
    const listItemText = item.completed ? (
      <ListItemText
        id={labelId}
        primary={item.task}
        className={classes.strike}
      />
    ) : (
      <ListItemText id={labelId} primary={item.task} />
    );
    return (
      <ListItem key={item.itemId} button>
        {listItemText}
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(item.itemId)}
            checked={item.completed}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <List dense className={classes.root}>
      {listItems}
    </List>
  );
};

// const mapStateToProps = state => ({
//   todo: state
// });
// const mapDispatchToProps = { updateList };
//export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

//The connect() function connects a React component to a Redux store.
export default connect()(ToDoList);