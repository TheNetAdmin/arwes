import React, {
  type ForwardedRef,
  type CSSProperties,
  type ReactElement,
  useRef,
  useEffect
} from 'react'
import { cx } from '@arwes/tools'
import { memo, mergeRefs } from '@arwes/react-tools'
import { useAnimator } from '@arwes/react-animator'
import { type CreateBackgroundMovingLinesSettings, createBackgroundMovingLines } from '@arwes/bgs'

interface MovingLinesProps extends CreateBackgroundMovingLinesSettings {
  elementRef?: ForwardedRef<HTMLCanvasElement>
  className?: string
  style?: CSSProperties
}

const MovingLines = memo((props: MovingLinesProps): ReactElement => {
  const { elementRef: elementRefExternal, className, style } = props

  const animator = useAnimator()
  const elementRef = useRef<HTMLCanvasElement>(null)
  const propsRef = useRef(props)

  propsRef.current = props

  useEffect(() => {
    const canvas = elementRef.current

    if (!canvas) {
      return
    }

    const background = createBackgroundMovingLines({
      settings: propsRef,
      canvas,
      animator
    })

    background.start()

    return () => {
      background.stop()
    }
  }, [animator])

  return (
    <canvas
      role="presentation"
      ref={mergeRefs(elementRef, elementRefExternal)}
      className={cx('arwes-bgs-movinglines', className)}
      style={style}
    />
  )
})

export { MovingLines }
