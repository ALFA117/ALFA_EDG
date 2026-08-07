import p01 from './assets/photos/edg-01.jpg';
import p02 from './assets/photos/edg-02.jpg';
import p03 from './assets/photos/edg-03.jpg';
import p04 from './assets/photos/edg-04.jpg';
import p05 from './assets/photos/edg-05.jpg';
import p06 from './assets/photos/edg-06.jpg';
import p07 from './assets/photos/edg-07.jpg';
import p08 from './assets/photos/edg-08.jpg';
import p09 from './assets/photos/edg-09.jpg';
import p10 from './assets/photos/edg-10.jpg';
import p11 from './assets/photos/edg-11.jpg';
import p12 from './assets/photos/edg-12.jpg';
import p13 from './assets/photos/edg-13.jpg';
import p14 from './assets/photos/edg-14.jpg';
import p15 from './assets/photos/edg-15.jpg';
import p16 from './assets/photos/edg-16.jpg';
import p17 from './assets/photos/edg-17.jpg';
import p18 from './assets/photos/edg-18.jpg';
import p19 from './assets/photos/edg-19.jpg';
import p20 from './assets/photos/edg-20.jpg';
import p21 from './assets/photos/edg-21.jpg';
import p22 from './assets/photos/edg-22.jpg';
import p23 from './assets/photos/edg-23.jpg';

// width/height/ratio measured from the source files before compression.
export const photos = [
  { src: p01, width: 1749, height: 1800, ratio: 0.9717 },
  { src: p02, width: 1800, height: 1200, ratio: 1.5 },
  { src: p03, width: 1800, height: 1200, ratio: 1.5 },
  { src: p04, width: 1800, height: 1200, ratio: 1.5 },
  { src: p05, width: 1800, height: 1200, ratio: 1.5 },
  { src: p06, width: 1800, height: 1201, ratio: 1.4988 },
  { src: p07, width: 1800, height: 1201, ratio: 1.4988 },
  { src: p08, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p09, width: 1310, height: 874, ratio: 1.4989 },
  { src: p10, width: 1440, height: 960, ratio: 1.5 },
  { src: p11, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p12, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p13, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p14, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p15, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p16, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p17, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p18, width: 1350, height: 1800, ratio: 0.75 },
  { src: p19, width: 941, height: 1672, ratio: 0.5628 },
  { src: p20, width: 941, height: 1672, ratio: 0.5628 },
  { src: p21, width: 1013, height: 1800, ratio: 0.5628 },
  { src: p22, width: 1350, height: 1800, ratio: 0.75 },
  { src: p23, width: 1013, height: 1800, ratio: 0.5628 },
].map((photo, index) => ({
  ...photo,
  alt: `ALFA-EDG — registro fotográfico ${index + 1}`,
}));
