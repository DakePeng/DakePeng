import { useRef } from 'react';

export const useDragControls = (maxIndex, updateCenterIndex) => {
  const dragging = useRef(false);
  const barRef = useRef(null);

  const onBarClick = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newCenterIndex = Math.round(percent * maxIndex);
    updateCenterIndex(newCenterIndex);
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;
    const percent = newX / rect.width;
    const newCenterIndex = Math.round(percent * maxIndex);
    updateCenterIndex(newCenterIndex);
  };

  const onMouseUp = () => {
    dragging.current = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onDotMouseDown = (e) => {
    e.preventDefault();
    dragging.current = true;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return {
    barRef,
    dragging,
    onBarClick,
    onDotMouseDown,
  };
};