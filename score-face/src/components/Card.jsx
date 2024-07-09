import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, amber, blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ card, onLike, isLiked }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClickLike = () => {
    onLike(card);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 225 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[700] }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.strLeague}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="250"
        sx={{ bgcolor: amber[200] }}
        image={
          card.strBadge
            ? card.strBadge
            : "https://p.turbosquid.com/ts-thumb/G1/DmZpF4/dj/soccerballold_ps_01/jpg/1636720870/2048x1536/fit_q99/013052a47aa87ac0780a5c34a53a659a8ee47140/soccerballold_ps_01.jpg"
        }
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleClickLike}
          sx={isLiked ? { color: red[500] } : { color: amber[500] }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{card.strDescriptionEN}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
