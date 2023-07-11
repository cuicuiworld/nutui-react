import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'
import GridContext from '../grid/grid.context'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type GridDirection = 'horizontal' | 'vertical'

export interface GridItemProps extends BasicComponent {
  text: string | ReactNode
  fontSize: string | number
  color: string
  icon: string | ReactNode
  iconSize?: string | number
  iconColor?: string
  parentIconSize?: string | number
  parentIconColor?: string
  index: number

  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
}

const defaultProps = {
  ...ComponentDefaults,
  text: '',
  fontSize: '',
  color: '',
  icon: '',
  iconSize: '',
  iconColor: '',
  parentIconSize: '',
  parentIconColor: '',

  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
} as GridItemProps
export const GridItem: FunctionComponent<
  Partial<GridItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    columnNum,
    index,
    gutter,
    square,
    text,
    fontSize,
    color,
    icon,
    iconColor,
    iconSize,
    parentIconSize,
    parentIconColor,
    border,
    center,
    reverse,
    direction,
    iconClassPrefix,
    iconFontClassName,
    onClick,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('grid-item')
  const context = useContext(GridContext)

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const rootStyle = () => {
    const rootStyle: CSSProperties = {
      flexBasis: `${100 / +columnNum}%`,
    }

    if (square) {
      rootStyle.paddingTop = `${100 / +columnNum}%`
    } else if (gutter) {
      rootStyle.paddingRight = pxCheck(gutter)
      if (index >= columnNum) {
        rootStyle.marginTop = pxCheck(gutter)
      }
    }

    return { ...rootStyle, ...style }
  }

  const contentClass = () => {
    return classNames(b('content'), {
      [b('content--border')]: border,
      [b('content--surround')]: border && gutter,
      [b('content--center')]: center,
      [b('content--square')]: square,
      [b('content--reverse')]: reverse,
      [b(`content--${direction}`)]: !!direction,
    })
  }

  const isIconName = () => {
    return typeof icon === 'string'
  }

  const handleClick = (e: any) => {
    onClick && onClick(e)
    context.onClick &&
      context.onClick(
        {
          text,
          icon,
          iconSize,
          iconColor,
          parentIconSize,
          parentIconColor,
          index,
          columnNum,
          border,
          gutter,
          center,
          square,
          reverse,
          direction,
          fontSize,
          color,
        },
        index
      )
  }

  return (
    <div className={b()} style={rootStyle()} {...rest} onClick={handleClick}>
      <div className={contentClass()}>
        {icon && isIconName() ? (
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            name={icon as string}
            size={iconSize || parentIconSize}
            color={iconColor || parentIconColor}
          />
        ) : (
          <>{icon}</>
        )}
        {text && (
          <div className="nut-grid-item__text" style={{ fontSize, color }}>
            {text}
          </div>
        )}
        {children && <>{children}</>}
      </div>
    </div>
  )
}

GridItem.defaultProps = defaultProps
GridItem.displayName = 'NutGridItem'
