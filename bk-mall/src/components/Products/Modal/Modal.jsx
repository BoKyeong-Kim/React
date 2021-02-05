import React, { useState } from 'react'
import { Popover, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
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
        <Button aria-describedby={id} variant="contained" color="primary" onClick={() => handleClick(product.id)}>
            Button
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEI}
            onClose={handleClose}
            anchorPosition={{ top: 500, left: 750 }}
            anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
        >
            <Typography className={classes.typography}>{product.name}</Typography>
        </Popover>
        </>
    )
}

export default Modal
