import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { FormControl, InputLabel, Select, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { DropzoneArea } from 'material-ui-dropzone';


const useStyles = makeStyles(theme => ({
    content: {
        textAlign: 'center',
    },    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    dropzone: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: theme.spacing(1)
    },
    description: {
        width: 400,
        minWidth: 200,
        margin: theme.spacing(1)
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex'
    }
}));

const Upload = () => {
    const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div className={classes.content}>
            <h1>Upload a Problem</h1>
            <FormControl className={classes.formControl}>
                <InputLabel>Subject</InputLabel>
                <Select>
                    {/* Eventually will need to add all options for every class */}
                    <option value="" />
                    <option value="CMPE">CMPE</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Class Name</InputLabel>
                <Select>
                    
                    <option value="" />
                    <option value="CMPE">CMPE</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField 
                    label="Enter problem title" 
                />
            </FormControl>
            {/* Handles video upload, 
                documentation: https://www.npmjs.com/package/material-ui-dropzone
                As of now, you can upload images and video files only*/}
            <DropzoneArea 
                filesLimit={3}
                acceptedFiles={['image/*', 'video/*']}
                dropzoneText={'Drag and drop a file or click here'}
                dropzoneClass={classes.dropzone}
                showPreviews={true}
                showPreviewsInDropzone={false}
            />
            <TextField
                id="problem-description"
                label="Problem Description"
                placeholder="Enter a description of the problem"
                multiline
                variant="outlined"
                className={classes.description}
                showFileNames={true}
            />
            {/* Still need to handle button on click to connect to the backend */}
            <Button
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            </div>
        </div>
    );  
}

export default Upload;