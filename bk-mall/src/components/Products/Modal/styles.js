import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    typography: {
        padding: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop : '56.25%',
        minHeight: '70px',
        maxWidth: '95%' ,
        maxHeight: '250%' ,   
    },
    cardContent : {
        display : 'flex',
        justifyContent : 'space-between',
        padding: theme.spacing(5),
        overflowY: "auto"
    },
    main : {
        width: '550px', 
        height: '700px',
    },
}));