import React, { useContext } from 'react';
import Layout from '../../ui/Layout';
import {  Grid, TextField } from '@mui/material';
import Contact from './Contact';
// import ContactContext from '../../../context/contact/contactContext';
import AuthContext from '../../../context/auth/authContext';

const Home = () => {
  const {auth} = useContext(AuthContext);
  console.log(auth);

  return (
    <Layout customStyle={{ my: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            id='search-contacts'
            label='Search'
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent='space-between' spacing={4}>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
