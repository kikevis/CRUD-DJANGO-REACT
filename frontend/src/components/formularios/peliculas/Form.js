import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import BasicText from './Text/BasicText';
import MultilineText from './Text/MultilineText';
import UploadButton from './Button/UploadButton';
import AddButton from './Button/AddButton';

// ----------------------------------------------------------------------

export default function Form() {
  return (
      <Container>
          <BasicText />
          <MultilineText />
          <UploadButton />
          <AddButton />
      </Container>
  );
}

// ----------------------------------------------------------------------
