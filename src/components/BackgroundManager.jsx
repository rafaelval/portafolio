import { useEffect } from 'react';
import backgroundJpg from '../images/background.jpg';
import backgroundWebp from '../images/background.webp';

// Verificar soporte de WebP
const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
};

export const BackgroundManager = () => {
  useEffect(() => {
    const bgImage = supportsWebP() ? backgroundWebp : backgroundJpg;
    document.body.style.backgroundImage = `url('${bgImage}')`;
  }, []);

  return null; // No renderiza nada, solo inyecta el background
};
