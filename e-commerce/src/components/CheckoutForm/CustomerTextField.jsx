import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext(); 

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                as={TextField}
                defaultValue = ""
                name={name}
                control={control}
                label={label}
                fullWidth
                required
            /> 
            {/*입력또는 텍스트필드들이 컨트롤러를 사용하여 제어가능*/} 
        </Grid>
    )
}

export default FormInput
