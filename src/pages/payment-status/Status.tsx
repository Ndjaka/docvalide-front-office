// @flow
import * as React from 'react';
import { Fragment } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box, Button, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import useResponsive from '../../hooks/useResponsive';
import { useNavigate } from 'react-router-dom';

export type statusType = 'success' | 'cancel';

interface StatusProps {
  status: statusType;
}

const Status = (props: StatusProps) => {
  const isMobile = useResponsive('isMobile');
  const navigate = useNavigate();
  const handleDownload = () => {};

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
        flexDirection: 'column',
      }}
    >
      {props.status === 'success' ? (
        <Fragment>
          <CheckCircleOutlinedIcon
            sx={{ fontSize: '78px', color: '#4CAF50' }}
          />
          <Typography
            variant={'body1'}
            sx={{
              textAlign: 'center',
              mt: '20px',
            }}
          >
            Votre paiement a été effectué avec succès.
            <br />
            Vous recevrez un email de confirmation. Vous pouvez maintenant
            télécharger votre facture ou continuer à utiliser notre service.
          </Typography>
          <Box
            sx={{
              mt: '20px',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <Button fullWidth={isMobile} variant={'outlined'}>
              Télécharger la facture
            </Button>
            <Button
              onClick={handleContinue}
              fullWidth={isMobile}
              variant={'contained'}
            >
              Continuer
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <CancelOutlinedIcon sx={{ fontSize: '78px', color: '#F44336' }} />
          <Typography
            variant={'body1'}
            sx={{
              textAlign: 'center',
              mt: '20px',
            }}
          >
            Votre paiement a été annulé.
            <br />
          </Typography>
          <Box
            sx={{
              mt: '20px',
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <Button
              onClick={handleContinue}
              fullWidth={isMobile}
              variant={'contained'}
            >
              Continuer
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default Status;
