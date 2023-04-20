import spaceMap from '../assets/maps/rod-hunt-space.jpg';
import streetMap from '../assets/maps/rod-hunt-street.jpg';
import partyMap from '../assets/maps/rod-hunt-party.jpg';

import aliceImg from '../assets/characters/alice.webp';
import jackSparrowImg from '../assets/characters/jack-sparrow.jpg';
import frankensteinImg from '../assets/characters/frankenstein.webp';

import spidermanImg from '../assets/characters/spiderman.webp';
import margeImg from '../assets/characters/marge.jpeg';
import batmanImg from '../assets/characters/batman.jpg';
import simoneImg from '../assets/characters/simone-biles.webp';
import usainImg from '../assets/characters/usain-bolt.webp';

import slappyImg from '../assets/characters/slappy.webp';
import gnomeImg from '../assets/characters/gnome.jpg';

import type { Map } from '../types/types';

const gameData: Map[] = [
  {
    id: 'space-map-rod-hunt',
    type: 'space',
    title: 'Space Wonderland',
    imgSource: spaceMap,
    creator: 'Rod Hunt',
    creatorLink: 'https://rodhunt.com/illustration',
    instructions: 'Find the following characters',
    characters: [
      {
        id: 'space-alice-in-wonderland',
        name: 'Alice in Wonderland',
        img: aliceImg,
      },
      {
        id: 'space-jack-sparrow',
        name: 'Captain Jack Sparrow',
        img: jackSparrowImg,
      },
      {
        id: 'space-frankenstein-monster',
        name: "Frankenstein's Monster",
        img: frankensteinImg,
      },
    ],
  },
  {
    id: 'street-map-rod-hunt',
    type: 'street',
    title: 'Street Fair Adventure',
    imgSource: streetMap,
    creator: 'Rod Hunt',
    creatorLink: 'https://rodhunt.com/illustration',
    instructions: 'Find the following characters',
    characters: [
      {
        id: 'street-spiderman',
        name: 'Man in a Spider-Man suit',
        img: spidermanImg,
      },
      {
        id: 'street-marge-simpson',
        name: 'Marge Simpson impersonator',
        img: margeImg,
      },
      {
        id: 'street-batman',
        name: 'Man in a Batman suit',
        img: batmanImg,
      },
      {
        id: 'street-simone',
        name: 'Simone Biles (American Gymnast)',
        img: simoneImg,
      },
      {
        id: 'street-usain',
        name: 'Usain Bolt (Jamaican Sprinter)',
        img: usainImg,
      },
    ],
  },
  {
    id: 'party-map-rod-hunt',
    type: 'party',
    title: 'Halloween Party',
    imgSource: partyMap,
    creator: 'Rod Hunt',
    creatorLink: 'https://rodhunt.com/illustration',
    instructions:
      'Find Slappy the Dummy and all the gnomes! Beware, there are several gnome impersonators in this party',
    characters: [
      {
        id: 'party-slappy',
        name: 'Slappy the Dummy',
        img: slappyImg,
      },
      {
        id: 'party-gnome-red',
        name: 'Gnome with red hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-orange',
        name: 'Gnome with orange hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-green',
        name: 'Gnome with green hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-black',
        name: 'Gnome with black hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-blue',
        name: 'Gnome with blue hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-pink',
        name: 'Gnome with pink hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-cerulean',
        name: 'Gnome with cerulean hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-brown',
        name: 'Gnome with brown hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-mustard',
        name: 'Gnome with mustard hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-maroon',
        name: 'Gnome with maroon hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-lime',
        name: 'Gnome with lime hat',
        img: '',
        isGnome: true,
      },
      {
        id: 'party-gnome-yellow',
        name: 'Gnome with yellow hat',
        img: '',
        isGnome: true,
      },
    ],
    previewCharacters: [
      {
        id: 'party-slappy-preview',
        name: 'Slappy the Dummy',
        img: slappyImg,
      },
      {
        id: 'party-gnome',
        name: 'Gnome',
        img: gnomeImg,
        isGnome: true,
      },
    ],
  },
];

export default gameData;
