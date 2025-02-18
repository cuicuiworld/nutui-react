import React, { FunctionComponent, useRef } from 'react'
import { TriangleDown, TriangleUp } from '@nutui/icons-react'
import bem from '@/utils/bem'

export interface TrendArrowProps {
  rate: number
  digits: number
  showSign: boolean
  showZero: boolean
  arrowLeft: boolean
  syncTextColor: boolean
  textColor: string
  riseColor: string
  dropColor: string
  iconSize: string
  upIcon: React.ReactNode
  downIcon: React.ReactNode
  className: string
  style: React.CSSProperties
}
const defaultProps = {
  rate: 0,
  digits: 2,
  showSign: false,
  showZero: false,
  arrowLeft: false,
  syncTextColor: true,
  textColor: '#333',
  riseColor: '#fa2c19',
  dropColor: '#64b578',

  upIcon: null,
  downIcon: null,
  className: '',
} as TrendArrowProps

export const TrendArrow: FunctionComponent<
  Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    rate,
    digits,
    showSign,
    showZero,
    arrowLeft,
    syncTextColor,
    textColor,
    riseColor,
    dropColor,
    upIcon,
    downIcon,
    className,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const b = bem('trendarrow')
  const handleClick = () => {}
  const rateTrend = useRef(rate > 0)

  const myFixed = (num: any, digit = 2) => {
    if (Object.is(parseFloat(num), NaN)) {
      return console.log(`传入的值：${num}不是一个数字`)
    }
    num = parseFloat(num)
    // eslint-disable-next-line no-restricted-properties
    const numPow = Math.pow(10, digit)
    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit)
  }

  const calcStyle = (() => {
    const arrowColor = rateTrend.current ? riseColor : dropColor
    const textEquArrowColor = syncTextColor ? arrowColor : textColor
    const style = {
      color: rate === 0 ? textColor : textEquArrowColor,
    }
    return style
  })()

  const calcRate = (() => {
    rateTrend.current = rate > 0
    const absRate = Math.abs(rate)
    if (!showZero && rate === 0) {
      return '--'
    }
    const resultRate = `${
      // eslint-disable-next-line no-nested-ternary
      showSign && rate !== 0 ? (rateTrend.current ? '+' : '-') : ''
    }${myFixed(Number(absRate), digits)}%`

    return resultRate
  })()

  const calcIconProps = (() => {
    const iconProps = {
      color: rateTrend.current ? riseColor : dropColor,
    }
    return iconProps
  })()

  const renderContent = (arrowLeft: boolean) => {
    const classNameSuffix = !arrowLeft ? 'icon-after' : 'icon-before'
    return (
      <span className={`${b(classNameSuffix)} ${b('rate')}`} style={calcStyle}>
        {calcRate}
      </span>
    )
  }
  return (
    <div className={`${b()} ${className}`} {...rest} onClick={handleClick}>
      {!arrowLeft && renderContent(!arrowLeft)}
      {children || (
        <>
          {Number(rate) !== 0 && (
            <>
              {rateTrend ? (
                <TriangleUp color={calcIconProps.color} />
              ) : (
                <TriangleDown color={calcIconProps.color} />
              )}
            </>
          )}
        </>
      )}
      {arrowLeft && renderContent(!arrowLeft)}
    </div>
  )
}

TrendArrow.defaultProps = defaultProps
TrendArrow.displayName = 'NutTrendArrow'
