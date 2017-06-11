import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
// import ManageCoursePage from './course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    {/*<Route path="course" component={ManageCoursePage} />*/}
    {/*<Route path="course/:id" component={ManageCoursePage} />*/}
    <Route path="about" component={AboutPage} />
  </Route>
);
