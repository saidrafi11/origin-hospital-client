import React from 'react';
import { PhotoAlbum } from 'react-photo-album';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useQuery } from '@tanstack/react-query';



const Gallary = () => {

  const [index, setIndex] = React.useState(-1);
  const { data: imgInfo = [], isLoading } = useQuery({
    queryKey: ['img-file'],
    queryFn: async () => {
      const res = await fetch(`https://test-server.skyshopuk.com/img-file`);
      const data = await res.json();
      return data;
    }

  })
  console.log(imgInfo);
  let imgList = []
  for (let i = 0; i < imgInfo.length; i++) {
    imgList.push({ src: `https://test-server.skyshopuk.com/images/${imgInfo[i].ImgFile}`, width: 1600, height: 900 })
  }
  console.log(imgList);





  return (
    <div >


      <PhotoAlbum
        layout="columns"
        photos={imgList}
        onClick={({ index }) => setIndex(index)}
      />
      

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imgList}
        plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
      />
    </div>
  );
};

export default Gallary;