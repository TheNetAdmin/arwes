import React, {
  type CSSProperties,
  type ForwardedRef,
  type ReactElement,
  useRef,
  useEffect
} from 'react'
import { cx } from '@arwes/tools'
import { memo, mergeRefs } from '@arwes/react-tools'
import { useAnimator } from '@arwes/react-animator'
import { type CreateBackgroundPuffsSettings, createBackgroundPuffs } from '@arwes/bgs'

interface PuffsProps extends CreateBackgroundPuffsSettings {
  elementRef?: ForwardedRef<HTMLCanvasElement>
  className?: string
  style?: CSSProperties
}

const Puffs = memo((props: PuffsProps): ReactElement => {
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

    const background = createBackgroundPuffs({
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
      className={cx('arwes-bgs-puffs', className)}
      style={style}
    />
  )
})

export type { PuffsProps }
export { Puffs }
