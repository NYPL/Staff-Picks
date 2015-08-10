import React from 'react';
import Radium from 'radium';

class BookShare extends React.Component {
  // Constructor used in ES6
  constructor(props) {
    super(props);

    let shareUrl = window.location.href,
      nyplStaffPick = `Staff Picks %7C The New York Public Library - ${this.props.book['item']['attributes']['title']}`;

     this.state = {
      facebook: `http://www.facebook.com/sharer.php?u=${nyplStaffPick}&t=${nyplStaffPick}`,
      twitter: `https://twitter.com/intent/tweet?text=${nyplStaffPick}&url=${shareUrl}`,
      tumblr: `https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=${shareUrl}` +
      `&title=NYPL%20%7C%20Staff%20Picks&caption=Every%20month%20NYPL%27s%20librarians%20share%20their%20` +
      `favorite%20reads.`
    }
  }

  render () {
    return (
      <div ref='BookContent' className='BookShare' style={styles.BookShare}>
        <li key='fb' style={[styles.social, styles.facebook]}>
	        <a href={this.state.facebook} target='_blank' style={styles.shareLink} label='Share on facebook'></a>
        </li>
        <li key='twtr' style={[styles.social, styles.twitter]}>
					<a href={this.state.twitter} style={styles.shareLink} label='Share on twitter'></a>
        </li>
        <li key='tumblr' style={[styles.social, styles.tumblr]}>
	        <a href={this.state.tumblr} target='_blank' style={styles.shareLink}></a>
	      </li>
      </div>
    );
  }
};

const styles={
	BookShare: {
		margin: '0 0 0 4px'
	},
	social: {
    display: 'inline-block',
	  margin: '-12px 0 0 -5px',
	  position: 'relative',
	  height: '61px',
	  width: '60px',
	  ':hover': {
      cursor: 'pointer',
      zIndex: '99'
	  },
	  '@media (max-width: 414px)': {
			margin: '0 0 0 -5px',
	  },
	},
	facebook: {
	  backgroundImage: 'url("/client/images/social/social.fb.init.png")',
	  ':hover': {
      backgroundImage: 'url("/client/images/social/social.fb.activeInit.png")'
	  }
	},
	twitter: {
	  backgroundImage: 'url("/client/images/social/social.twtr.init.png")',
	  ':hover': {
      backgroundImage: 'url("/client/images/social/social.twtr.hover.png")'
	  }
	},
	shareLink :{
		color: 'transparent',
		display: 'inline-block',
		height: '61px',
	  width: '60px',

	},
	tumblr: {
	  backgroundImage: 'url("/client/images/social/social.tmblr.init.png")',
	  ':hover': {
      backgroundImage: 'url("/client/images/social/social.tmblr.hover.png")'
	  }
	}
};


export default Radium(BookShare);
