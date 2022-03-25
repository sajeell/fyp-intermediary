import React from 'react'
import renderer from 'react-test-renderer'

import Drawer from './Drawer'

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<Drawer />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the dashboard text bold when dashboard in the props is true', () => {
  const tree = renderer.create(<Drawer dashboard={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the driver text bold when driver in the props is true', () => {
  const tree = renderer.create(<Drawer driver={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the parents text bold when parents in the props is true', () => {
  const tree = renderer.create(<Drawer parents={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the students text bold when students in the props is true', () => {
  const tree = renderer.create(<Drawer students={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the trip text bold when trip in the props is true', () => {
  const tree = renderer.create(<Drawer trip={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the bus text bold when bus in the props is true', () => {
  const tree = renderer.create(<Drawer bus={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the settings text bold when settings in the props is true', () => {
  const tree = renderer.create(<Drawer settings={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('makes the help text bold when help in the props is true', () => {
  const tree = renderer.create(<Drawer help={true} />).toJSON()
  expect(tree).toMatchSnapshot()
})
