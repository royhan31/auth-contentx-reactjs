import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
   card: {
     minWidth: 275,
     boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
   },
   bullet: {
     display: 'inline-block',
     margin: '0 2px',
     transform: 'scale(0.8)',
   },
   title: {
     fontSize: 14,
   },
   pos: {
     marginBottom: 12,
   },

  field: {
    '& > *': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },

  icon: {
    margin: 11,
  },

  button: {
    display: 'flex',
    margin: '20px auto',
  },

  buttonRegister: {
    display: 'flex',
    margin: '20px auto',
  },

  cardTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: '10px'
  },

  cardTopTitle: {
    fontSize: 40,
    textAlign: 'center',
    margin: '10px',
    color: '#0693e3',
    fontWeight: 'bold'
  },
  alert: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 25,
  }

}));
