// src/components/LightsaberCursor.tsx
const LightsaberCursor = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 24"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-glow"
  >
    {/* Blade */}
    <rect x="0" y="8" width="160" height="8" rx="4" fill="#00FFFF">
      <animate attributeName="width" from="0" to="160" dur="0.4s" fill="freeze" />
    </rect>

    {/* Blade core */}
    <rect x="0" y="10" width="160" height="4" rx="2" fill="#e0ffff" />

    {/* Emitter (connection to hilt) */}
    <rect x="160" y="6" width="4" height="12" rx="2" fill="#1e1e1e" />

    {/* Hilt */}
    <rect x="164" y="4" width="36" height="16" rx="2" fill="#333" />
    <circle cx="170" cy="12" r="2" fill="#ff5555" />
    <circle cx="178" cy="12" r="2" fill="#888" />
    <circle cx="186" cy="12" r="2" fill="#888" />
  </svg>
);

export default LightsaberCursor;
