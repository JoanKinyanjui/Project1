import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root:{
    maxWidth:'100%',
    maxHeight:'100%',
  },
  media: {
    height: 'max-height',
    paddingTop:'56.25%'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));