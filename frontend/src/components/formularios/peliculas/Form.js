import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import BasicTextTitle from './Text/BasicTextTitle';
import BasicTextGenre from './Text/BasicTextGenre';
import BasicTextYear from './Text/BasicTextYear';
import MultilineText from './Text/MultilineText';
import UploadButton from './Button/UploadButton';
import AddButton from './Button/AddButton';

// ----------------------------------------------------------------------

export default function Form() {
  return (
      <Container>
          <BasicTextTitle />
          <BasicTextGenre />
          <BasicTextYear />
          {/* <MultilineText /> */}
          {/* <UploadButton /> */}
          <AddButton />
      </Container>
  );
}

// ----------------------------------------------------------------------
