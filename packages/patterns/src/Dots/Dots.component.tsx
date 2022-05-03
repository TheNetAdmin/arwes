import React, { ReactElement, useRef, useEffect } from 'react';
import { animate } from 'motion';
import { cx, mergeRefs } from '@arwes/tools';

import { DotsProps } from './Dots.types';
import { getDistanceFromOriginToCornerProgress } from './getDistanceFromOriginToCornerProgress';

const defaultProps: Required<Pick<DotsProps, 'active' | 'type' | 'duration' | 'distance' | 'size' | 'origin'>> = {
  type: 'box',
  active: true,
  duration: 2,
  distance: 30,
  size: 4,
  origin: 'center'
};

const DotsComponent = (props: DotsProps): ReactElement => {
  const propsFull = { ...defaultProps, ...props };
  const {
    elementRef: elementRefExternal,
    className,
    style,
    active,
    duration
  } = propsFull;

  const elementRef = useRef<HTMLCanvasElement>(null);
  const propsFullRef = useRef(propsFull);

  propsFullRef.current = propsFull;

  useEffect(() => {
    const canvas = elementRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const draw = (progress: number): void => {
      const {
        color,
        type,
        distance,
        size,
        origin,
        originInverted
      } = propsFullRef.current;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const xLength = 1 + Math.floor(width / distance);
      const yLength = 1 + Math.floor(height / distance);

      const xMargin = width % distance;
      const yMargin = height % distance;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);

      for (let xIndex = 0; xIndex < xLength; xIndex++) {
        const x = (xMargin / 2) + (xIndex * distance);

        for (let yIndex = 0; yIndex < yLength; yIndex++) {
          const y = (yMargin / 2) + (yIndex * distance);

          const distanceFromOriginProgress =
            getDistanceFromOriginToCornerProgress(width, height, x, y, origin);

          const distancePercentage = (active && originInverted) || (!active && !originInverted)
            ? 1 - distanceFromOriginProgress
            : distanceFromOriginProgress;

          const alphaProgress = progress / distancePercentage;
          const alpha = Math.max(0, Math.min(1, alphaProgress));

          ctx.beginPath();
          ctx.globalAlpha = active ? alpha : 1 - alpha;

          if (type === 'box') {
            ctx.rect(x - (size / 2), y - (size / 2), size, size);
          }
          else {
            ctx.arc(x, y, size, 0, 2 * Math.PI);
          }

          ctx.fillStyle = color;
          ctx.fill();
          ctx.closePath();
        }
      }
    };

    const animationControl = animate(draw, { duration, easing: 'ease-in-out' });

    let resizeObserver: ResizeObserver | undefined;
    if (window.ResizeObserver) {
      resizeObserver = new window.ResizeObserver(() => {
        if (active && animationControl.currentTime && animationControl.currentTime >= duration) {
          draw(1);
        }
      });
      resizeObserver.observe(canvas);
    }

    return (): void => {
      animationControl?.cancel();
      resizeObserver?.disconnect();
    };
  }, [active]);

  return (
    <canvas
      ref={mergeRefs(elementRef, elementRefExternal)}
      className={cx('arwes-patterns-dots', className)}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'block',
        border: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
};

DotsComponent.defaultProps = defaultProps;

export type { DotsProps };
export { DotsComponent };
