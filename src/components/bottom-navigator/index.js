import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0
	},
});

const BottomNavigator = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
			<BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<HomeIcon />} />
			<BottomNavigationAction component={Link} to="/favorites-coupons" label="Favorites Coupons" value="favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction component={Link} to="/favorites-bussines" label="Favorite Bussines" value="favoritesBussines" icon={<LocationOnIcon />} />
			<BottomNavigationAction component={Link} to="/settings" label="Folder" value="folder" icon={<SettingsIcon />} />
		</BottomNavigation>
	);
}

export default BottomNavigator;