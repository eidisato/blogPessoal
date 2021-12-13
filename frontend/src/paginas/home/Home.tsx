import React from "react";
import "./Home.css";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
function Home() {
    return (
        <>
            <Grid item xs={12} container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center"  xs={12} sm={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto1'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto2'>Ao lar do conteudo para Web Dev!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='bt-post'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid  sm={6} xs={12} >
                    <Box display="flex" justifyContent="center">
                    <img src="https://s10.gifyu.com/images/Dev.gif" alt="dev+" />
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );


}
export default Home;