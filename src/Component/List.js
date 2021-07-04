import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
		maxHeight:150,
		minHeight:150,
		padding :"0 17px 0 17px",
		objectFit:"contain"
  },
  cardContent: {
	// 	"&:last-child": {
	// 		paddingBottom: 0,
	//  },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Cards(props) {
	const {airline:{name,website,logo}} = props
  const classes = useStyles();
  return (
    <React.Fragment>
  		<Card className={classes.card}>
				<CardMedia
					component="img"
					className={classes.cardMedia}
					image={logo}
					title={name}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography>
					<Link href={website} variant="body2">
					{website}
					</Link>						
					</Typography>
				</CardContent>
			</Card>
    </React.Fragment>
  );
}