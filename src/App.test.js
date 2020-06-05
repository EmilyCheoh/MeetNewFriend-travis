import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
// import App from './App';
import Restaurant from './components/Restaurant';
import JoinButton from "./components/JoinButton";

test('rendering all restaurants', () => {
  // const { getByText } = render(<App />);
  const { container } = render(<Restaurant name={"Zhen Huang"} event={{ "cuisine": "Italian", "date": "2020-04-20", "host": "George Costanza", "description": "If you enjoy brunches, this is the place for you. Why settle for iHop when you can go with NU CS students to get the finest French Toast in Evanston?!", "group-size": "3/10", "id": "1", "imageURL": "https://firebasestorage.googleapis.com/v0/b/meetnewfriends-6e495.appspot.com/o/img%2Fleedeep.jpg?alt=media&token=c379e94f-cb84-4207-9acf-797c40e1cde1", "name": "Le Peep", "people": ["George Costanza", "Elaine Benis", "Cosmo Kramer"], "time": "11:00-11:50", "tag": "School" }} people={{
    "aboutme": "I like naps and when I get tired of naps, I like to take a longer nap.",
    "id": "2",
    "imageURL": "https://firebasestorage.googleapis.com/v0/b/meetnewfriends-6e495.appspot.com/o/img%2Fgeorge.jpg?alt=media&token=5984faa4-6316-44d5-8b62-1024c517133f",
    "major": "RFTV",
    "name": "George Costanza",
    "year": "2021"
  }} />);
  console.log(container);
  const restaurant = getByTestId(container, "restaurants");
  // console.log(restaurant.textContent)
  expect(restaurant.textContent).toBe("Le PeepSchoolCuisine: Italian Date: 2020-04-20Attendee: 3/10  Time: Breakfast starts: 11:00 for 50minIf you enjoy brunches, this is the place for you. Why settle for iHop when you can go with NU CS students to get the finest French Toast in Evanston?!Remove Edit this eventJoin");

  const join = getByTestId(container, "joinButton");
  fireEvent.click(join);
  expect(join.textContent).toBe("Quit");
});
