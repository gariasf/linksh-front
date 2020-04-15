import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import CropFreeOutlined from "@material-ui/icons/CropFreeOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import "./styles.scss";

export const LinkSummaryItem = () => {
  const handleCopyClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("copy");
  };
  return (
    <ExpansionPanel
      elevation={0}
      TransitionProps={{ unmountOnExit: true }}
      className="link-summary"
    >
      <ExpansionPanelSummary
        classes={{ content: "link-summary-header" }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Link
          href="https://nth.sh/1234556"
          target="_blank"
          rel="noopener"
          className="heading"
        >
          <Typography noWrap>https://nth.sh/1234556</Typography>
        </Link>
        <div className="subheading">
          <Typography variant="body2" noWrap>
            <Link
              color="secondary"
              href="https://www.byte-time.com/viewtopic.php?f=5&t=5"
            >
              https://www.byte-time.com/viewtopic.php?f=5&t=5
            </Link>
          </Typography>
        </div>
        <IconButton>
          <CropFreeOutlined fontSize="small" />
        </IconButton>
        <IconButton onClick={handleCopyClick}>
          <FileCopyOutlined fontSize="small" />
        </IconButton>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div
          style={{ display: "flex", flex: 1, justifyContent: "space-evenly" }}
        >
          <div className="column">
            <div className="column-title">
              <FingerprintOutlinedIcon
                fontSize="small"
                style={{ color: "rgba(0, 0, 0, 0.23)" }}
              />
              &nbsp;
              <Typography variant="button" align="center">
                ID
              </Typography>
            </div>
            <Typography variant="overline" align="center">
              123456
            </Typography>
          </div>
          <div className="column">
            <div className="column-title">
              <VisibilityOutlinedIcon
                fontSize="small"
                style={{ color: "rgba(0, 0, 0, 0.23)" }}
              />
              &nbsp;
              <Typography variant="button" align="center">
                Visits
              </Typography>
            </div>
            <Typography variant="overline" align="center">
              53
            </Typography>
          </div>
          <div className="column">
            <div className="column-title">
              <ScheduleOutlinedIcon
                fontSize="small"
                style={{ color: "rgba(0, 0, 0, 0.23)" }}
              />
              &nbsp;
              <Typography variant="button" align="center">
                Created
              </Typography>
            </div>
            <Typography variant="overline" align="center">
              Yesterday
            </Typography>
          </div>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
