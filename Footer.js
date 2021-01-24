import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';



function Footer() {


	return (

		<div className="footer">
			<div className="footer_left">
				<img className="footer__albumlogo"
					src="http://www.pngmart.com/files/13/Blue-Abstract-PNG-Photo.png"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Nothing</h4>
					<p>The Script</p>
				</div>
				
			</div>

			<div className="footer_center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon /*onClick={skipNext}*/ className="footer__icon" />
				<PlayCircleOutlineIcon
					///onClick={handlePlayPause}
					fontSize="large"
					className="footer__icon"
				/>

				<SkipNextIcon /*onClick={skipPrevious} */className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>

			<div className="footer_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>


	)
}

export default Footer;