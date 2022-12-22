import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import slides from "../data/slides"


const Gallary = () => {
    
        const [index, setIndex] = React.useState(-1);

    // const [open, setOpen] = React.useState(false);

    const slides = [
        { src: require('./../../../assets/images/b1.jpg'), width: 800, height: 600 },
        { src: require('./../../../assets/images/279368921_2582971368504743_8098821171039577904_n.jpg'), width: 1600, height: 900 },
        { src: require('./../../../assets/images/outer-image.jpg'), width: 1600, height: 900 },
        { src: require('./../../../assets/images/b4.jpg'), width: 1600, height: 900 },
        { src: require('./../../../assets/images/b3.jpg'), width: 1600, height: 900 },
        { src: require('./../../../assets/images/b2.jpg'), width: 1600, height: 900 }
    ];

    return (
        <div >
         {/* <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button> */}

      <PhotoAlbum
        layout="columns"
        photos={slides}
        targetRowHeight={250}
        onClick={({ index }) => setIndex(index)}
      />

<Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
      />
      </div>
    );
};

export default Gallary;