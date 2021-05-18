import TodoList from './TodoList'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Header from './Header';
import AddOrDeleteTodo from './NewItem';

const useStyles = makeStyles(theme => ({
    paper: {
        width: "600px",
        padding: theme.spacing(3, 2),
        height: "600px",
        margin: "3rem auto",
    }
}));

const TodoApp = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Header />
            <AddOrDeleteTodo />
            <TodoList />
        </Paper>
    );
}

export default TodoApp;