/** 
  Configuration file for route paths used in the app.
  This file contains the route paths as string constants, which can be
  used throughout the application to avoid hardcoding route paths and 
  ensure consistency.
*/

import AddNewCar from "../modules/add-new-car/AddNewCar";
import CarDetails from "../modules/car-details/CarDetails";

export default {
  root: 'RootNavigation',
  home: 'Home',
  carLibrary: 'CarLibrary',
  CarDetails:'CarDetails',
  services: 'Services',
  profile: 'Profile',
  AddNewCar:'AddNewCar'
};
