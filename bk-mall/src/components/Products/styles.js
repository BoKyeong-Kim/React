import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar : theme.mixins.toolbar,
    root: {
      flexGrow: 1
    },
    content: {
      padding: theme.spacing(3),
      flexGrow : 1
    }
  }));
  