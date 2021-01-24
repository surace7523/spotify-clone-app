import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {

	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	return (

		<div className="body">
			<Header spotify={spotify} />


			<div className="body_info">
				<img src="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
					alt="" />



				<div className="body_infotext">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			{/*
				<Header spotify={spotify} />


				<div className="body_info">
					<img src="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
						alt="" />
				
						

					<div className="body_infotext">
						<strong>PLAYLIST</strong>
						<h2>Discover Weekly</h2>
						<p>{discover_weekly?.description}</p>
					</div>
				</div>


					<div className="body_songs">


					<div className="body_icons">
						<PlayCircleFilledIcon className="body_shuffle" />
						<FavoriteIcon fontSize="large" />
							<MoreHorizIcon />
					</div>


					<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

					/*list of songs*/

			}

		</div>
		

			


	 );
    }

export default Body;


/*{
	discover_weekly?.tracks.items.map((item) => (
		<SongRow track={item.track} />


	))
}*/