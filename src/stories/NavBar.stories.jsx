import React from 'react';

import NavBar from '../components/NavBar'
import SearchInput from '../components/SearchInput'
import BarChartWithResize from '../components/BarChartWithResize'
import NavBarMDX from './docs/NavBarMDX.mdx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    docs: {
      page: NavBarMDX,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const links = [
  { title: "Home", path: "/" },
  { title: "Search", path: "/search" },
  { title: "Bar", path: "/bar" },
];

export const Instance = () => <Router>
  <div className="App" style={{ paddingTop: '3.5rem' }}>
    <NavBar links={links} />
    <Routes>
        <Route path="/" exact element={<h2>Hello</h2>} />
        <Route path="/search" element={<SearchInput />} />
        <Route path="/bar" element={<BarChartWithResize />} />
    </Routes>
  </div>
</Router>
// More on args: https://storybook.js.org/docs/react/writing-stories/args
