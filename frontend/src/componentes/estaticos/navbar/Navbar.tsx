import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" className="cor-do-navbar">
                <Toolbar variant="dense">
                    
                    <Box mx={1} className="pointer" >
                        <Typography variant="h5" color="inherit">
                            <img src="https://i.imgur.com/Z2ge8FQ.png" alt="" />
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        
                        <Box mx={5} className="pointer-black">
                            <Typography variant="h6" color="inherit">
                                Publicar Postagem
                            </Typography>
                        </Box>
                        <Box mx={5} className="pointer-black">
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box mx={5} className="pointer-black">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={5} className="pointer-black">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decotator-none'>
                        <Box mx={10} className="pointer-black">
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                        </Box>
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;