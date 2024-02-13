import React, { useEffect, useState } from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Chip ({ label, color }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  if (ExecutionEnvironment.canUseDOM) {
    useEffect(() => {
      setIsDarkTheme(document.documentElement.getAttribute('data-theme') === 'dark');
    }, [document.documentElement.getAttribute('data-theme')]);
  }

  const backgroundColor = isDarkTheme
    ? `var(--ifm-color-chip-${color ?? 'blue'}-dark)` // Dark theme background color
    : `var(--ifm-color-chip-${color ?? 'blue'}-light)`; // Light theme background color

  return (
    <BrowserOnly>{() =>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
          borderRadius: '16px',
          height: '24px',
          padding: '4px 8px',
          marginX: '2px',
          fontSize: '14px'
        }}
      >
        {label}
      </div>
    }
    </BrowserOnly>
  );
};
