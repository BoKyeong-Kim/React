import React, { useState } from 'react'
import { Popover, Button, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const Modal = ({ product }) => {
    const classes = useStyles();
    const [anchorEI, setAnchorEI] = useState(null);
    
    const handleClick = (productId) => {
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
            <div className={classes.main}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source}/>
            <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
                {product.price.formatted_with_code}
            </Typography>
            </CardContent>
            <Typography className={classes.content} variant="body3" dangerouslySetInnerHTML={{__html: product.description}} color="textSecondary" />
            </div>
        </Popover>
        </Card>
        </>
    )
}

export default Modal
