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
import "./styles.scss";

export const LinkSummaryItem = () => {
  const handleCopyClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("copy");
  };
  return (
    <ExpansionPanel elevation={0} TransitionProps={{ unmountOnExit: true }}>
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
            https://www.byte-time.com/viewtopic.php?f=5&t=5
          </Typography>
        </div>
        <IconButton onClick={handleCopyClick}>
          <FileCopyOutlined fontSize="small" />
        </IconButton>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{ display: "flex", flex: 1 }}>
          <div className="column">
            <Typography variant="body2">
              Original:&nbsp;
              <Link
                color="secondary"
                href="https://www.byte-time.com/viewtopic.php?f=5&t=5"
              >
                https://www.byte-time.com/viewtopic.php?f=5&t=5
              </Link>
            </Typography>
            <Typography variant="body2">Visits:&nbsp;53</Typography>
          </div>
          <div className="column">
            <Typography variant="body2">Created on:&nbsp;Time</Typography>
            <Typography variant="body2">
              Last time visited:&nbsp;Time
            </Typography>
          </div>
          <div className="helper column">
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns">Learn more</a>
            </Typography>
          </div>
        </div>
        <Divider />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
