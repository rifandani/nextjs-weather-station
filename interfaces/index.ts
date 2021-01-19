// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Sensor {
  temp: string;
  alt: string;
  press: string;
  heat: string;
  humid: string;
  lux: string;
  flame: string;
  createdAt: Date;
}
