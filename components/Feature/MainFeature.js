import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackupIcon from '@material-ui/icons/Backup';
import ExploreIcon from '@material-ui/icons/Explore';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import Grid from '@material-ui/core/Grid';
import useStyles from './feature-style';

function MainFeature() {
  const classes = useStyles();
  return (
    <div className={classes.pageSection}>
      <Grid container className={classes.root} spacing={6}>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <BackupIcon className={classes.icon} />
            <Typography variant="h5">
              Cost
            </Typography>
            <Typography variant="body1">
              2D Artists and 3D Designers are expensive and prone to getting sick leave lol
            </Typography>
          </div>
        </Grid>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <ExploreIcon className={classes.icon} />
            <Typography variant="h5">
              Time
            </Typography>
            <Typography variant="body1">
              Time per asset varies with experience and the detail but is generally quite high
            </Typography>
          </div>
        </Grid>
        <Grid sm={4} item>
          <div className={classes.featureList}>
            <MusicIcon className={classes.icon} />
            <Typography variant="h5">
              Choice of style
            </Typography>
            <Typography variant="body1">
              One artist is usually skilled in just a single style or at best a few
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
