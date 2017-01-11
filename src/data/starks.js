"use strict";

const starks = [
  {
    'id': 'eddard_stark',
    'name': 'Eddard Stark',
    'origin': 'Winterfell',
    'Portrayed by': 'Sean Bean ',
    'image': 'driulis-gonzalez.jpg',
    'cover': 'driulis-gonzalez-cover.jpg',
    'link': 'http://gameofthrones.wikia.com/wiki/Eddard_Stark',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Chiba', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1995', 'type': 'G', 'city': 'Mar del Plata', 'event': 'Pan American Games', 'category': '-57kg' },
      { 'year': '1996', 'type': 'G', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1997', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '1999', 'type': 'G', 'city': 'Birmingham', 'event': 'World Championships', 'category': '-57kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '2003', 'type': 'G', 'city': 'S Domingo', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2003', 'type': 'S', 'city': 'Osaka', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-63kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': '-63kg' },
      { 'year': '2006', 'type': 'G', 'city': 'Cartagena', 'event': 'Central American and Caribbean Games', 'category': 'Tema' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'Pan American Games', 'category': '-63kg' },
      { 'year': '2007', 'type': 'G', 'city': 'Rio de Janeiro', 'event': 'World Championships', 'category': '-63kg' },
    ],
  },
  {
    'id': 'robb-stark',
    'name': 'Robb Stark',
    'origin': 'Winterfell',
    'Portrayed by': 'Richard Madden ',
    'image': 'mark-huizinga.jpg',
    'cover': 'mark-huizinga-cover.jpg',
    'link': 'http://gameofthrones.wikia.com/wiki/Robb_Stark',
    'medals': [
      { 'year': '1994', 'type': 'B', 'city': 'Gdansk', 'event': 'European Championships', 'category': '-78kg' },
      { 'year': '1996', 'type': 'B', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-86kg' },
      { 'year': '1996', 'type': 'G', 'city': 'The Hague', 'event': 'European Championships', 'category': '-86kg' },
      { 'year': '1997', 'type': 'G', 'city': 'Oostende', 'event': 'European Championships', 'category': '-86kg' },
      { 'year': '1998', 'type': 'G', 'city': 'Oviedo', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '1999', 'type': 'B', 'city': 'Bratislava', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2000', 'type': 'G', 'city': 'Sydney', 'event': 'Olympic Games', 'category': '-90kg' },
      { 'year': '2000', 'type': 'S', 'city': 'Wroclaw', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2001', 'type': 'G', 'city': 'Paris', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2002', 'type': 'B', 'city': 'Maribor', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2003', 'type': 'B', 'city': 'Düsseldorf', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2004', 'type': 'B', 'city': 'Athens', 'event': 'Olympic Games', 'category': '-90kg' },
      { 'year': '2004', 'type': 'S', 'city': 'Bucharest', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Cairo', 'event': 'World Championships', 'category': '-90kg' },
      { 'year': '2005', 'type': 'B', 'city': 'Rotterdam', 'event': 'European Championships', 'category': '-90kg' },
      { 'year': '2008', 'type': 'G', 'city': 'Lisbon', 'event': 'European Championships', 'category': '-90kg' },
    ],
  },
  {
    'id': 'bran_stark',
    'name': 'Bran Stark',
    'origin': 'Winterfell',
    'Portrayed by': 'Isaac Hempstead-Wright ',
    'image': 'rishod-sobirov.jpg',
    'cover': 'rishod-sobirov-cover.jpg',
    'link': 'http://gameofthrones.wikia.com/wiki/Bran_Stark',
    'medals': [
      { 'year': '2007', 'type': 'S', 'city': 'Kuwait City', 'event': 'Asian Championships', 'category': '-60kg' },
      { 'year': '2008', 'type': 'B', 'city': 'Beijing', 'event': 'Olympic Games', 'category': '-60kg' },
      { 'year': '2010', 'type': 'G', 'city': 'Tokyo', 'event': 'World Championships', 'category': '-60kg' },
      { 'year': '2011', 'type': 'G', 'city': 'Paris', 'event': 'World Championships', 'category': '-60kg' },
      { 'year': '2012', 'type': 'B', 'city': 'London', 'event': 'Olympic Games', 'category': '-60kg' },
      { 'year': '2015', 'type': 'B', 'city': 'Astana', 'event': 'World Championships', 'category': '-66kg' },
      { 'year': '2016', 'type': 'B', 'city': 'Rio de Janeiro', 'event': 'Olympic Games', 'category': '-66kg' },
    ],
  },
];

export default athletes;
