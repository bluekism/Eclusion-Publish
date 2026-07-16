import React from 'react';

interface ProductIllustrationProps {
  imageKey: string;
  className?: string;
  imagePath?: string;
}

export const ProductIllustration: React.FC<ProductIllustrationProps> = ({
  imageKey,
  className = "w-full h-full",
  imagePath
}) => {
  // If the user provided a custom image file path, render that as an image.
  if (imagePath) {
    return (
      <img
        src={imagePath}
        alt={imageKey}
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Beautiful, high-fidelity whimsical SVGs with hand-drawn vibes and summer accents.
  switch (imageKey) {
    case 'tote-green':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Background Sand/Sky details */}
          <circle cx="100" cy="110" r="70" fill="#E0F2FE" />
          {/* Handles */}
          <path d="M75 100 C 75 40, 125 40, 125 100" stroke="#70a133" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Bag Body */}
          <rect x="60" y="90" width="80" height="75" rx="16" fill="#88c043" stroke="#5f8c26" strokeWidth="4" />
          {/* Checkered Patterns */}
          <path d="M76 90 L 76 165 M92 90 L 92 165 M108 90 L 108 165 M124 90 L 124 165" stroke="#70a133" strokeWidth="3" strokeDasharray="3 3" />
          <path d="M60 105 L 140 105 M60 120 L 140 120 M60 135 L 140 135 M60 150 L 140 150" stroke="#70a133" strokeWidth="3" strokeDasharray="3 3" />
          {/* Decorative Happy Flower Pin */}
          <g transform="translate(100, 125) scale(0.8)">
            <circle cx="0" cy="0" r="10" fill="#ffd966" />
            <circle cx="0" cy="-14" r="7" fill="#fff" />
            <circle cx="12" cy="-7" r="7" fill="#fff" />
            <circle cx="12" cy="7" r="7" fill="#fff" />
            <circle cx="0" cy="14" r="7" fill="#fff" />
            <circle cx="-12" cy="7" r="7" fill="#fff" />
            <circle cx="-12" cy="-7" r="7" fill="#fff" />
            {/* Smile on the pin */}
            <circle cx="-3" cy="-1" r="1.5" fill="#334155" />
            <circle cx="3" cy="-1" r="1.5" fill="#334155" />
            <path d="M -4,3 Q 0,6 4,3" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'bunny-keychain':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Sparkles backdrop */}
          <circle cx="100" cy="100" r="70" fill="#FFF2CC" />
          {/* Keychain ring and metal connector */}
          <circle cx="100" cy="35" r="12" stroke="#94A3B8" strokeWidth="4" fill="none" />
          <path d="M100 47 L100 70" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="70" r="5" fill="#64748B" />
          
          {/* Bunny Head */}
          <rect x="65" y="75" width="70" height="65" rx="28" fill="#F472B6" stroke="#DB2777" strokeWidth="4" />
          
          {/* Bunny Ears */}
          <path d="M75 75 C 60 30, 85 30, 85 75" fill="#F472B6" stroke="#DB2777" strokeWidth="4" strokeLinejoin="round" />
          <path d="M77 75 C 68 45, 82 45, 82 75" fill="#FBCFE8" />
          
          <path d="M125 75 C 140 30, 115 30, 115 75" fill="#F472B6" stroke="#DB2777" strokeWidth="4" strokeLinejoin="round" />
          <path d="M123 75 C 132 45, 118 45, 118 75" fill="#FBCFE8" />

          {/* Bunny Body & Cute Hands */}
          <path d="M75 135 C 75 160, 125 160, 125 135" fill="#F472B6" stroke="#DB2777" strokeWidth="4" />
          
          {/* Bunny Face */}
          {/* Eyes */}
          <path d="M 80,105 Q 85,99 90,105" stroke="#470A24" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M 110,105 Q 115,99 120,105" stroke="#470A24" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Blush */}
          <circle cx="78" cy="113" r="6" fill="#F43F5E" opacity="0.6" />
          <circle cx="122" cy="113" r="6" fill="#F43F5E" opacity="0.6" />
          {/* Cute Bunny Nose and Mouth */}
          <polygon points="100,111 97,108 103,108" fill="#470A24" />
          <path d="M97,114 Q100,117 100,114 Q100,117 103,114" stroke="#470A24" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Star sticker on tummy */}
          <path d="M100 134 L102 138 L107 139 L103 142 L104 147 L100 144 L96 147 L97 142 L93 139 L98 138 Z" fill="#FFE047" />
        </svg>
      );

    case 'tote-teal':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Warm Sun in background */}
          <circle cx="100" cy="100" r="70" fill="#FFFBEB" />
          <circle cx="145" cy="60" r="18" fill="#FEF08A" opacity="0.8" />
          {/* Straps */}
          <path d="M75 95 C 75 35, 125 35, 125 95" stroke="#0E7490" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* Tote Base */}
          <path d="M55 90 L145 90 L135 165 C 135 170, 130 174, 125 174 L75 174 C 70 174, 65 170, 65 165 Z" fill="#0891B2" stroke="#0E7490" strokeWidth="4" />
          {/* Aesthetic White Wave Stripe (Summer block style) */}
          <path d="M58 115 Q 100 128 142 115 L139 140 Q 100 152 61 140 Z" fill="#FFF2CC" stroke="#D97706" strokeWidth="2" strokeDasharray="2 2" />
          {/* Heart Stamp */}
          <path d="M100 122 C 100 122, 96 116, 92 118 C 88 120, 89 126, 100 132 C 111 126, 112 120, 108 118 C 104 116, 100 122, 100 122 Z" fill="#EF4444" />
        </svg>
      );

    case 'yellow-cap':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ambient summer pool backdrop */}
          <circle cx="100" cy="110" r="70" fill="#E0F7FA" />
          
          {/* Cap Crown */}
          <path d="M45 130 C 45 65, 155 65, 155 130 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="5.5" />
          {/* Cap Visor/Brim */}
          <path d="M35 125 C 50 145, 150 145, 165 125 C 170 120, 160 135, 140 142 C 100 155, 100 155, 60 142 C 40 135, 30 120, 35 125 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="4.5" />
          {/* Stitch Panels lines */}
          <path d="M100 70 Q 100 100 100 130" stroke="#D97706" strokeWidth="3" strokeDasharray="3 3" />
          <path d="M100 70 Q 75 95 50 124" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M100 70 Q 125 95 150 124" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Top Button */}
          <ellipse cx="100" cy="69" rx="8" ry="5" fill="#D97706" />

          {/* Whimsical Smiling Sun Patch */}
          <g transform="translate(100, 100) scale(0.9)">
            <circle cx="0" cy="0" r="12" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="-4" cy="-2" r="1.5" fill="#1E293B" />
            <circle cx="4" cy="-2" r="1.5" fill="#1E293B" />
            <path d="M -5,3 Q 0,7 5,3" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'socks-lavender':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="100" cy="110" r="70" fill="#F5F3FF" />
          
          {/* Sock 1 (Left slightly behind) */}
          <g transform="translate(-10, -5)">
            {/* Leg */}
            <path d="M75 60 L95 60 L95 110 L75 110 Z" fill="#C084FC" stroke="#9333EA" strokeWidth="3" />
            {/* Heel & Foot */}
            <path d="M75 105 C75 115, 60 135, 80 145 L115 145 C125 145, 125 125, 110 125 L95 110 Z" fill="#C084FC" stroke="#9333EA" strokeWidth="3" strokeLinejoin="round" />
            {/* Toe & Heel reinforcement colors */}
            <path d="M105 125 C115 125, 120 135, 115 145 L110 145 Z" fill="#E9D5FF" />
            <path d="M75 110 C72 120, 80 132, 86 128 Z" fill="#E9D5FF" />
            {/* Ribbed stripes on cuffs */}
            <line x1="75" y1="65" x2="95" y2="65" stroke="#E9D5FF" strokeWidth="3" />
            <line x1="75" y1="72" x2="95" y2="72" stroke="#E9D5FF" strokeWidth="3" />
            <line x1="75" y1="79" x2="95" y2="79" stroke="#E9D5FF" strokeWidth="3" />
          </g>

          {/* Sock 2 (Right slightly in front) */}
          <g transform="translate(18, 10)">
            {/* Leg */}
            <path d="M75 60 L95 60 L95 110 L75 110 Z" fill="#E879F9" stroke="#C026D3" strokeWidth="3" />
            {/* Heel & Foot */}
            <path d="M75 105 C75 115, 60 135, 80 145 L115 145 C125 145, 125 125, 110 125 L95 110 Z" fill="#E879F9" stroke="#C026D3" strokeWidth="3" strokeLinejoin="round" />
            {/* Toe & Heel reinforcement colors */}
            <path d="M105 125 C115 125, 120 135, 115 145 L110 145 Z" fill="#FCE7F3" />
            <path d="M75 110 C72 120, 80 132, 86 128 Z" fill="#FCE7F3" />
            {/* Ribbed stripes on cuffs */}
            <line x1="75" y1="65" x2="95" y2="65" stroke="#FCE7F3" strokeWidth="3" />
            <line x1="75" y1="72" x2="95" y2="72" stroke="#FCE7F3" strokeWidth="3" />
            <line x1="75" y1="79" x2="95" y2="79" stroke="#FCE7F3" strokeWidth="3" />
            {/* Little yellow star print */}
            <path d="M85 92 L87 95 L90 95 L88 97 L89 100 L85 98 L81 100 L82 97 L80 95 L83 95 Z" fill="#FDE047" />
          </g>
        </svg>
      );

    case 'socks-purple':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="100" cy="110" r="70" fill="#EEF2F6" />
          
          {/* Sock 1 (Left) */}
          <g transform="translate(-15, 0)">
            <path d="M80 50 L98 50 L98 105 L80 105 Z" fill="#818CF8" stroke="#4F46E5" strokeWidth="3" />
            <path d="M80 100 C80 110, 68 128, 85 138 L115 138 C122 138, 122 120, 110 120 L98 105 Z" fill="#818CF8" stroke="#4F46E5" strokeWidth="3" strokeLinejoin="round" />
            {/* Stripes */}
            <line x1="80" y1="58" x2="98" y2="58" stroke="#E0E7FF" strokeWidth="3.5" />
            <line x1="80" y1="68" x2="98" y2="68" stroke="#E0E7FF" strokeWidth="3.5" />
            {/* Flower decoration */}
            <circle cx="89" cy="85" r="4" fill="#FDE047" />
            <circle cx="89" cy="81" r="2" fill="#FFFFFF" />
            <circle cx="93" cy="85" r="2" fill="#FFFFFF" />
            <circle cx="89" cy="89" r="2" fill="#FFFFFF" />
            <circle cx="85" cy="85" r="2" fill="#FFFFFF" />
          </g>

          {/* Sock 2 (Right) */}
          <g transform="translate(15, 8)">
            <path d="M80 50 L98 50 L98 105 L80 105 Z" fill="#6366F1" stroke="#4338CA" strokeWidth="3" />
            <path d="M80 100 C80 110, 68 128, 85 138 L115 138 C122 138, 122 120, 110 120 L98 105 Z" fill="#6366F1" stroke="#4338CA" strokeWidth="3" strokeLinejoin="round" />
            {/* Stripes */}
            <line x1="80" y1="58" x2="98" y2="58" stroke="#EEF2F6" strokeWidth="3.5" />
            <line x1="80" y1="68" x2="98" y2="68" stroke="#EEF2F6" strokeWidth="3.5" />
            {/* Flower decoration */}
            <circle cx="89" cy="85" r="4" fill="#FDE047" />
            <circle cx="89" cy="81" r="2" fill="#FFFFFF" />
            <circle cx="93" cy="85" r="2" fill="#FFFFFF" />
            <circle cx="89" cy="89" r="2" fill="#FFFFFF" />
            <circle cx="85" cy="85" r="2" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 'flower-keychain':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="100" cy="110" r="70" fill="#ECFDF5" />
          
          {/* Metal ring */}
          <circle cx="100" cy="35" r="14" stroke="#94A3B8" strokeWidth="4.5" fill="none" />
          <path d="M100 49 L100 70" stroke="#94A3B8" strokeWidth="4" />

          {/* Whimsical daisy petals */}
          <g transform="translate(100, 110)">
            {/* Petals */}
            <circle cx="0" cy="-35" r="18" fill="#FDE047" stroke="#EAB308" strokeWidth="3" />
            <circle cx="28" cy="-20" r="18" fill="#FCA5A5" stroke="#F87171" strokeWidth="3" />
            <circle cx="32" cy="12" r="18" fill="#93C5FD" stroke="#60A5FA" strokeWidth="3" />
            <circle cx="10" cy="34" r="18" fill="#C084FC" stroke="#A855F7" strokeWidth="3" />
            <circle cx="-22" cy="24" r="18" fill="#86EFAC" stroke="#4ADE80" strokeWidth="3" />
            <circle cx="-32" cy="-10" r="18" fill="#F9A8D4" stroke="#F472B6" strokeWidth="3" />
            
            {/* Center Core */}
            <circle cx="0" cy="0" r="24" fill="#FFFFFF" stroke="#64748B" strokeWidth="4.5" />
            
            {/* Big Smile Face */}
            <circle cx="-8" cy="-4" r="3" fill="#1E293B" />
            <circle cx="8" cy="-4" r="3" fill="#1E293B" />
            <path d="M -11,4 Q 0,14 11,4" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Cheek blush */}
            <circle cx="-13" cy="2" r="3.5" fill="#FDA4AF" />
            <circle cx="13" cy="2" r="3.5" fill="#FDA4AF" />
          </g>
        </svg>
      );

    case 'sunny-cup':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="100" cy="105" r="70" fill="#FFFBEB" />
          {/* Steam */}
          <path d="M 85,50 Q 90,40 85,30 Q 90,20 85,15" stroke="#D97706" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M 105,50 Q 110,40 105,30 Q 110,20 105,15" stroke="#D97706" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
          
          {/* Mug Handle */}
          <path d="M125 80 C165 80, 165 130, 125 130" stroke="#0891B2" strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M125 80 C155 80, 155 130, 125 130" stroke="#FFF" strokeWidth="4" strokeLinecap="round" fill="none" />
          
          {/* Mug Body */}
          <path d="M60 70 L130 70 L122 140 C122 146, 116 150, 110 150 L80 150 C74 150, 68 146, 68 140 Z" fill="#22D3EE" stroke="#0891B2" strokeWidth="5.5" strokeLinejoin="round" />
          
          {/* Painted Yellow Sun Graphic */}
          <g transform="translate(95, 110)">
            <circle cx="0" cy="0" r="16" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            {/* Sun Rays */}
            <path d="M0 -22 L0 -18 M15 -15 L11 -11 M22 0 L18 0 M15 15 L11 11 M0 22 L0 18 M-15 15 L-11 11 M-22 0 L-18 0 M-15 -15 L-11 -11" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cute smile */}
            <circle cx="-5" cy="-2" r="1.5" fill="#451A03" />
            <circle cx="5" cy="-2" r="1.5" fill="#451A03" />
            <path d="M-6,4 Q0,9 6,4" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="100" height="100" rx="10" fill="#E2E8F0" />
          <path d="M30 70 L50 40 L70 70 Z" fill="#cbd5e1" />
          <circle cx="35" cy="35" r="10" fill="#fff" />
        </svg>
      );
  }
};
