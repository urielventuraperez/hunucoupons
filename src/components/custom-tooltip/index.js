import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

export default CustomTooltip;