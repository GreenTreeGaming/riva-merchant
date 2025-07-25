import React from "react";

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: [number];
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value = [0],
  disabled = false,
  onChange,
}: SliderProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      disabled={disabled}
      onChange={onChange}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
    />
  );
}