import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import SideNavBarItem from '@/packages/sidenavbaritem'

test('should match snapshot', () => {
  const { asFragment } = render(
    <SideNavBarItem
      data-testid="sideNavBarItem-click"
      title="一级内容1"
      key="1-01"
    />
  )
  expect(asFragment()).toMatchSnapshot()
})
test('should emit click event', async () => {
  const click = jest.fn(({ title, key }) => {
    console.log('click>>>>', title, key)
  })
  const { getByTestId } = render(
    <>
      <SideNavBarItem
        data-testid="sideNavBarItem-click"
        title="一级内容1"
        key="1-01"
        onClick={click}
      />
    </>
  )
  fireEvent.click(getByTestId('sideNavBarItem-click'))
  expect(click).toBeCalled()
})
