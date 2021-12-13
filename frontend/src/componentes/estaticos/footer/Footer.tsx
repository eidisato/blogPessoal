import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>

                    <Box className='box-f'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='black'>Me siga nas redes sociais </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="https://github.com/eidisato" rel="noreferrer" target="_blank">
                                <GitHubIcon className='social-footer' />
                            </a>
                            <a href="https://www.instagram.com/eidisato/" rel="noreferrer"target="_blank" >
                                <InstagramIcon className='social-footer' />
                            </a>
                            <a href="https://www.linkedin.com/in/vinicius-eidi-sato/"rel="noreferrer" target="_blank"  >
                                <LinkedInIcon  className='social-footer'/>
                            </a>
                        </Box>
                    </Box>

                    <Box className='box-f2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='black' >© 2021 Copyright:</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" marginBottom={5}>
                            <Typography variant="subtitle2" gutterBottom className='black' align="center">contato.viniciuseidisato@gmail.com</Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </>
    );
}
export default Footer;