import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import BasicTextTitle from '../../components/formularios/peliculas/Text/BasicTextTitle';
import BasicTextGenre from '../../components/formularios/peliculas/Text/BasicTextGenre';
import BasicTextYear from '../../components/formularios/peliculas/Text/BasicTextYear';
import UploadButton from '../../components/formularios/peliculas/Button/UploadButton';
import AddButton from '../../components/formularios/peliculas/Button/AddButton';
import Form from '../../components/formularios/peliculas/Form';

// ----------------------------------------------------------------------

export default function AgregarPelicula() {
  return (
    <Page title="Agregar Pelicula">
      <Container sx={{ alignItems: 'center' }}>
          <h1>Agregar Película</h1>
          <Form />
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------
