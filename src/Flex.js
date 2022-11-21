import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Flex.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    button1: {
        display: 'flex',
        'justify-content': 'end',
        'right': '5px',
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: purple[500],
        },
    },
    notchedOutline: {},
    bootstrapRoot: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

function Flex(props) {
    const { classes } = props;
    const validationSchema = yup.object({
        LADP: yup
            .string('Enter the characters only')
            // .name('Name is required')
            .max(32, 'Name must be less than 50 characters')
            .required('LADP is required'),

        Name: yup
            .string('Enter the characters only')
            .max(32, 'Name must be less than 50 characters')
            .required('Name is required'),
        Extension: yup
            .string('Enter the characters only')
            .required('Extension is required'),
        Store: yup
            .string('Enter the characters only')
            .required('required Store Number '),
        Phone: yup
            .string('Enter the characters only')
            .required('Phonetype must be required'),
        DeviceExtension: yup
            .string('Enter the characters only')
            .required('DeviceExtension is required'),
        DeviceSerial: yup
            .string('Enter the characters only')
            .required(' Required DeviceSerialnumber '),
        Damage: yup
            .string('Enter the characters only')
            .required('Damage Type is required'),
    });
    const formik = useFormik({
        initialValues: {
            LADP: '',
            Name: '',
            Extension: '',
            Store: '',
            Phone: '',
            DeviceExtension: '',
            DeviceSerial: '',
            Damage: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div>
            <div align='center'>
                <h1 style={{ color: 'rgba(255, 123, 0, 0.973)' }}>Damaged TC52AX hdPhone Replacement
                    Form
                </h1>
                <h3 style={{ color: 'rgba(255, 30, 0, 0.753)' }}><i>To replace a stolen device or
                    for ordering additional devices,please use Ariba </i></h3>
                <h4 style={{ color: 'rgba(0, 0, 0, 0.699)' }}>Thank you using the TC52AX hdPhone
                    Replacement form.Please describe the nature of your problem in the fileds below.</h4>
                <h4 style={{ color: 'color:black' }} >For non-damage related issues,please call Technology
                    Supports Center:800-791-2750
                </h4>
                <h3 style={{ color: 'red' }} ><b>Do not use this form for devices stuck on
                    enrolling, the TSC can fix your device if you call it in.</b></h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            LADP
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="LADP"
                            placeholder="RTESTUSER03"
                            onChange={formik.handleChange}
                            value={formik.values.LADP}
                            error={formik.touched.LADP && Boolean(formik.errors.LADP)}
                            helperText={formik.touched.LADP && formik.errors.LADP}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Name<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="Name"
                            placeholder="Rachel Testuser03"
                            onChange={formik.handleChange}
                            value={formik.values.Name}
                            error={formik.touched.Name && Boolean(formik.errors.Name)}
                            helperText={formik.touched.Name && formik.errors.Name}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Extension<span>#</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="Extension"
                            onChange={formik.handleChange}
                            value={formik.values.Extension}
                            error={formik.touched.Extension && Boolean(formik.errors.Extension)}
                            helperText={formik.touched.Extension && formik.errors.Extension}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Store Number<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="Store"
                            onChange={formik.handleChange}
                            value={formik.values.Store}
                            error={formik.touched.Store && Boolean(formik.errors.Store)}
                            helperText={formik.touched.Store && formik.errors.Store}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Phone Type<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="Phone"
                            placeholder="RTESTUSER03"
                            onChange={formik.handleChange}
                            value={formik.values.Phone}
                            error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                            helperText={formik.touched.Phone && formik.errors.Phone}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Device Extension<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="DeviceExtension"
                            placeholder="#"
                            onChange={formik.handleChange}
                            value={formik.values.DeviceExtension}
                            error={formik.touched.DeviceExtension && Boolean(formik.errors.DeviceExtension)}
                            helperText={formik.touched.DeviceExtension && formik.errors.DeviceExtension}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Device Serial Number<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="DeviceSerial"
                            placeholder="#"
                            onChange={formik.handleChange}
                            value={formik.values.DeviceSerial}
                            error={formik.touched.DeviceSerial && Boolean(formik.errors.DeviceSerial)}
                            helperText={formik.touched.DeviceSerial && formik.errors.DeviceSerial}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                            Damage Type<span>*</span>
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input"
                            name="Damage"
                            onChange={formik.handleChange}
                            value={formik.values.Damage}
                            error={formik.touched.Damage && Boolean(formik.errors.Damage)}
                            helperText={formik.touched.Damage && formik.errors.Damage}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.margin} >
                        <InputLabel shrink  className={classes.bootstrapFormLabel}>
                            Notes
                        </InputLabel>
                        <InputBase
                            id="bootstrap-input1"
                            onChange={formik.handleChange}
                            value={formik.values.Notes}
                            error={formik.touched.Notes && Boolean(formik.errors.Notes)}
                            helperText={formik.touched.Notes && formik.errors.Notes}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }} 
                         />
                        {/* <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4}
                            style={{ width: 1500 }} /> */}
                    </FormControl>
                </div>
                <div align='center'>
                    <Checkbox
                    /> I,Rachel Testuser03(RTESTUSER03),understand that my store
                    could be charged if the damaged device is not returned
                    to vendor when a replacement
                    <br />is recevied, or our vendor determines the returned device has no damaged
                </div>
                <div className={classes.button1} >
                    <Button type='submit' variant="contained" style={{ margin: '8px 0', right: '33px' }}>Submit</Button>
                </div>
            </form>

        </div>
    );
}

Flex.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Flex);