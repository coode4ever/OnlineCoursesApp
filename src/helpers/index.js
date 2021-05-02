import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const courses = [
  {
    id: 1,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/201',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Accent',
  },
  {
    id: 2,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/200',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Secondary',
  },
  {
    id: 3,
    name: 'UX - UI Design',
    image: 'https://picsum.photos/203',
    teacher: 'Gustavo Kenter',
    rate: 4.9,
    color: 'Primary',
  },
];
export const dataSources = [
  {
    id: 1,
    title: '12 Video Tutorials',
    subTitle: '250 min of interesting lectures',
    icon: 'videocam',
    color: 'Primary',
    length: 7,
  },
  {
    id: 2,
    title: '7 Practical Tasks',
    subTitle: '3 teachers will check your work',
    icon: 'bookmark',
    color: 'Accent',
    length: 10,
  },
  {
    id: 3,
    title: '10 Templates for Design',
    subTitle: '500 MB of sketch files',
    icon: 'folder',
    color: 'Secondary',
    length: 7,
  },
];

export const courses2 = [
  {
    id: 1,
    name: 'Animation in After Efffects',
    image: 'https://picsum.photos/204',
    teacher: 'Tiano Mango',
    rate: 4.9,
    color: '#fedde4',
  },
  {
    id: 2,
    name: 'Mobile App Design',
    image: 'https://picsum.photos/205',
    teacher: 'Dulce Bator',
    rate: 4.9,
    color: '#dddbfb',
  },
  {
    id: 3,
    name: 'Animation in After Effects',
    image: 'https://picsum.photos/206',
    teacher: 'Lincoln Bator',
    rate: 4.9,
    color: '#d2f1f0',
  },
  {
    id: 4,
    name: 'Mobile App Design',
    image: 'https://picsum.photos/207',
    teacher: 'Livia Lubin',
    rate: 4.9,
    color: '#fedde4',
  },
];

export const getColorText = (string, length = 5) => {
  const sliceText = string.slice(0, length);
  const remainingText = string.slice(length, string.length);
  return {
    sliceText,
    remainingText,
  };
};
