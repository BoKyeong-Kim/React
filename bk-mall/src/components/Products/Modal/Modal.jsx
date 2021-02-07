import React, { useState } from 'react'
import { Popover, Button, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    typography: {
      padding: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop : '56.25%'
    },
    cardContent : {
        display : 'flex',
        justifyContent : 'space-between',
        padding: theme.spacing(20)
    }
  }));

const Modal = ({ fetchProduct, product }) => {
    const classes = useStyles();
    const [anchorEI, setAnchorEI] = useState(null);
    
    const handleClick = (productId) => {
        fetchProduct(productId)
        setAnchorEI(true);
    }

    const handleClose = () => {
        setAnchorEI(null);
    }

    const open = Boolean(anchorEI);
    const id = open ? 'simple-over' : undefined;

    return (
        <>
        <Card className={classes.root}>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={() => handleClick(product.id)}>
            Button
        </Button>
        
        <Popover 
            className={classes.main}
            id={id}
            open={open}
            anchorEl={anchorEI}
            onClose={handleClose}
            anchorPosition={{ top: 500, left: 750 }}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
        >
            <CardMedia className={classes.media} title={product.name} image={product.media.source}/>
            <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="body3" dangerouslySetInnerHTML={{__html: product.description}} color="textSecondary" />
            </CardContent>
        </Popover>
        </Card>
        </>
    )
}

export default Modal
