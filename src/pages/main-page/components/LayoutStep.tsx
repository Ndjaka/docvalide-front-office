import React from 'react';
import { Box, Button, Hidden, Typography } from '@mui/material';
import Steps from './Steps';
import palette from '../../../theme/palette';
import StepHeader from './StepHeader';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useResponsive from "../../../hooks/useResponsive";

interface StepDataProps {
  stepName: string;
  isCompleted: boolean;
  isLastItem: boolean;
}

interface HeaderProps {
  start: number;
  end: number;
  name: string;
}

interface LayoutStepProps {
  choiceLayoutName: string;
  choiceLayoutPic: string;
  children: React.ReactNode;
  stepData: StepDataProps[];
  header: HeaderProps;
  onBack: () => void;
  onNext: () => void;
  hideNext?: boolean;
}

function LayoutStep(props: LayoutStepProps) {
  const {
    children,
    stepData,
    header,
    choiceLayoutPic,
    choiceLayoutName,
    onNext,
    onBack,
    hideNext = true,
  } = props;
  const isMobile = useResponsive('isMobile');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Hidden smDown>
        <Box
          sx={{
            width: '333px',
            height: '588px',
            backgroundColor: 'primary.main',
            pt: '38px',
            pl: '30px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <img
              src={choiceLayoutPic}
              alt={choiceLayoutPic}
              style={{
                width: '57px',
                height: '57px',
              }}
            />
            <Typography
              variant={'h5'}
              color={'secondary.main'}
              sx={{
                marginLeft: '10px',
                marginTop: '23px',
                lineHeight: '1',
              }}
            >
              {choiceLayoutName}
            </Typography>
          </Box>

          <Box
            sx={{
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            {stepData.map((item, index) => {
              return (
                <Steps
                  key={`${item.stepName}_${index}`}
                  stepName={item.stepName}
                  isCompleted={item.isCompleted}
                  isLastItem={item.isLastItem}
                />
              );
            })}
          </Box>
        </Box>
      </Hidden>
      <Box
        sx={{
          paddingLeft: { lg: '24.29px', xs: '8px' },
          paddingRight: { lg: '24.29px',xs: '8px' },
          paddingBottom: '10px',
          border: `3px solid ${palette?.primary?.main}`,
          width: '100%',
          height: '588px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <StepHeader title={header.name} start={header.start} end={header.end} />
        <Box
          sx={{
            // overflowY: 'auto',
            // height: '388px',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '5px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            marginTop: 'auto',
            marginBottom: 0,
            paddingTop: '20px',
            height: '17%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }}
        >
          <Button

            fullWidth={isMobile}
            onClick={onBack}
            color="primary"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Précédent
          </Button>

          {
            hideNext &&
            <Button
              sx={{  marginY: { xs: '10px', md : '0px' , sm: '0px',lg: '0px' } }}
              fullWidth={isMobile}
              onClick={onNext}
              color="primary"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Suivant
            </Button>
          }
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(LayoutStep);
