import React from 'react'
//home
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
//compass
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
//subs
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
//library
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
//History
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
//Music
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
//sports
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
//Gaming
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
//Movies
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
//News
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArticleIcon from '@mui/icons-material/Article';
//Lives
import LiveTvIcon from '@mui/icons-material/LiveTv';
//Setting
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
//report
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
//help
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';//import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
//dark Mode
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
//Persone
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import './left.scss'

export default function LeftSide() {
  return (
    <div className='leftSide'>
        <div className="items">
          <div className="item">
            <HomeIcon/>
            <span> Home</span>
          </div>
          <div className="item">
            <ExploreOutlinedIcon/>
            <span>Explore</span>
          </div>
          <div className="item">
            <SubscriptionsOutlinedIcon/>
            <span>Subscriptions</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <VideoLibraryOutlinedIcon/>
            <span>Subscriptions</span>
          </div>
          <div className="item">
            <HistoryOutlinedIcon/>
            <span>History</span>
          </div>
        </div>
        <div className="items">
          <p>Sing in to like videos and subscribe.</p>
          <div className="signUp">
            <PersonOutlinedIcon className='btnIcon'/>
          <button >Sign Up</button>
          </div>
          
        </div>
        <div className="items">
          <div className="item">
            <LibraryMusicOutlinedIcon/>
            <span>Music</span>
          </div>
          <div className="item">
            <SportsBasketballOutlinedIcon/>
            <span>Sports</span>
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon/>
            <span>Gaming</span>
          </div>
          <div className="item">
            <MovieCreationOutlinedIcon/>
            <span>Movies</span>
          </div>
          <div className="item">
            <ArticleOutlinedIcon/>
            <span>News</span>
          </div>
          <div className="item">
            <LiveTvIcon/>
            <span>Live</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <SettingsOutlinedIcon/>
            <span>Setting</span>
          </div>
          <div className="item">
            <OutlinedFlagIcon/>
            <span>Report</span>
          </div>
          <div className="item">
            <HelpOutlineOutlinedIcon/>
            <span>Help</span>
          </div>
          <div className="item">
            <SettingsBrightnessIcon/>
            <span>Dark Mode</span>
          </div>
        </div>
      </div>
  )
}
