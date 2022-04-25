import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import BasicText from '../../components/formularios/peliculas/Text/BasicText';
import MultilineText from '../../components/formularios/peliculas/Text/MultilineText';
import UploadButton from '../../components/formularios/peliculas/Button/UploadButton';
import AddButton from '../../components/formularios/peliculas/Button/AddButton';
import Form from '../../components/formularios/peliculas/Form';

// ----------------------------------------------------------------------

export default function EditarPelicula() {
  return (
    <Page title="Crud Django Rest">
      <Container sx={{ alignItems: 'center' }}>
          <h1>Editar Pelicula</h1>
          <Form />
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------
