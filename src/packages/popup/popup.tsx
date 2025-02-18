import React, {
  FunctionComponent,
  useState,
  useEffect,
  MouseEventHandler,
  MouseEvent,
  ReactElement,
  ReactPortal,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import { OverlayProps, defaultOverlayProps } from '@/packages/overlay/overlay'
import Overlay from '@/packages/overlay'
import bem from '@/utils/bem'
import { ComponentDefaults } from '@/utils/typings'

type Teleport = HTMLElement | (() => HTMLElement) | null

export interface PopupProps extends OverlayProps {
  position: string
  transition: string
  overlayStyle: React.CSSProperties
  overlayClass: string
  popClass: string
  closeable: boolean
  closeIconPosition: string
  closeIcon: React.ReactNode
  destroyOnClose: boolean
  teleport: Teleport
  overlay: boolean
  round: boolean
  onOpen: () => void
  onClose: () => void
  onClick: (e: MouseEvent) => void
  onOpened: (e: HTMLElement) => void
  onClosed: (e: HTMLElement) => void
  onClickOverlay: (e: MouseEvent) => void
  onClickCloseIcon: (e: MouseEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'center',
  transition: '',
  overlayStyle: {},
  overlayClass: '',
  popClass: '',
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  destroyOnClose: true,
  teleport: null,
  overlay: true,
  round: false,
  onOpen: () => {},
  onClose: () => {},
  onClick: (e: MouseEvent) => {},
  onOpened: (e: HTMLElement) => {},
  onClosed: (e: HTMLElement) => {},
  onClickOverlay: (e: MouseEvent) => {},
  onClickCloseIcon: (e: MouseEvent) => {},
  ...defaultOverlayProps,
} as PopupProps

// 默认1000，参看variables
let _zIndex = 1000

export const Popup: FunctionComponent<
  Partial<PopupProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    visible,
    overlay,
    closeOnOverlayClick,
    overlayStyle,
    overlayClass,
    zIndex,
    lockScroll,
    duration,
    closeable,
    closeIconPosition,
    closeIcon,
    style,
    transition,
    round,
    position,
    popClass,
    className,
    destroyOnClose,
    teleport,
    onOpen,
    onClose,
    onClickOverlay,
    onClickCloseIcon,
    onOpened,
    onClosed,
    onClick,
  } = props

  const [index, setIndex] = useState(zIndex || _zIndex)
  const [innerVisible, setInnerVisible] = useState(visible)
  const [showChildren, setShowChildren] = useState(true)
  const [transitionName, setTransitionName] = useState('')

  const b = bem('popup')

  const baseStyle = {
    zIndex: index,
    animationDuration: `${duration}s`,
  }

  const overlayStyles = {
    ...overlayStyle,
    ...baseStyle,
  }

  const popStyles = {
    ...style,
    ...baseStyle,
  }

  const classes = classNames(
    {
      round,
      [`nut-popup-${position}`]: true,
      [`${popClass}`]: true,
      [`${className || ''}`]: true,
    },
    b('')
  )

  const closeClasses = classNames({
    'nut-popup__close-icon': true,
    [`nut-popup__close-icon--${closeIconPosition}`]: true,
  })

  const open = () => {
    if (!innerVisible) {
      setInnerVisible(true)
      setIndex(++_zIndex)
    }
    if (destroyOnClose) {
      setShowChildren(true)
    }
    onOpen && onOpen()
  }

  const close = () => {
    if (innerVisible) {
      setInnerVisible(false)
      if (destroyOnClose) {
        setTimeout(() => {
          setShowChildren(false)
          onClose && onClose()
        }, Number(duration) * 1000)
      }
    }
  }

  const onHandleClickOverlay = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClickOverlay && onClickOverlay(e)
      close()
    }
  }

  const onHandleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    onClick && onClick(e)
  }

  const onHandleClickCloseIcon: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent
  ) => {
    onClickCloseIcon && onClickCloseIcon(e)
    close()
  }

  const onHandleOpened: EnterHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    onOpened && onOpened(e)
  }

  const onHandleClosed: ExitHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    onClosed && onClosed(e)
  }

  const resolveContainer = (getContainer: Teleport | undefined) => {
    const container =
      typeof getContainer === 'function' ? getContainer() : getContainer
    return container || document.body
  }

  const renderToContainer = (getContainer: Teleport, node: ReactElement) => {
    if (getContainer) {
      const container = resolveContainer(getContainer)
      return createPortal(node, container) as ReactPortal
    }

    return node
  }
  const renderIcon = () => {
    if (closeable) {
      return (
        <div className={closeClasses} onClick={onHandleClickCloseIcon}>
          {React.isValidElement(closeIcon) ? (
            closeIcon
          ) : (
            <Close width={12} height={12} />
          )}
        </div>
      )
    }
    return null
  }
  const renderPop = () => {
    return (
      <CSSTransition
        classNames={transitionName}
        unmountOnExit
        timeout={500}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <div style={popStyles} className={classes} onClick={onHandleClick}>
          {showChildren ? children : ''}
          {renderIcon()}
        </div>
      </CSSTransition>
    )
  }

  const renderNode = () => {
    return (
      <>
        {overlay ? (
          <>
            <Overlay
              style={overlayStyles}
              className={overlayClass}
              visible={innerVisible}
              closeOnOverlayClick={closeOnOverlayClick}
              zIndex={zIndex}
              lockScroll={lockScroll}
              duration={duration}
              onClick={onHandleClickOverlay}
            />
            {renderPop()}
          </>
        ) : (
          <>{renderPop()}</>
        )}
      </>
    )
  }

  useEffect(() => {
    visible && open()
    !visible && close()
  }, [visible])

  useEffect(() => {
    setTransitionName(transition || `nut-popup-slide-${position}`)
  }, [position])

  return <>{renderToContainer(teleport as Teleport, renderNode())}</>
}

Popup.defaultProps = defaultProps
Popup.displayName = 'NutPopup'
