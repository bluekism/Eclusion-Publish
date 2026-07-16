import React from 'react';

interface ChildAvatarProps {
  avatarKey: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ChildAvatar: React.FC<ChildAvatarProps> = ({
  avatarKey,
  className = "",
  size = 'md'
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28 md:w-32 md:h-32",
    xl: "w-36 h-36 md:w-44 md:h-44"
  };

  const selectedSize = sizeClasses[size];

  // Render highly-detailed, beautiful, friendly cartoon face SVGs for each kid artist/founder!
  switch (avatarKey.toLowerCase()) {
    case 'ayu':
      return (
        <div className={`relative rounded-full overflow-hidden bg-amber-100 border-4 border-amber-300 shadow-md ${selectedSize} ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Sky & Sunburst */}
            <circle cx="50" cy="50" r="48" fill="#FFFBEB" />
            <circle cx="50" cy="50" r="35" fill="#FEF08A" opacity="0.4" />
            <path d="M 0,100 Q 50,75 100,100" fill="#6EE7B7" opacity="0.5" /> {/* Green hills backdrop */}
            
            {/* Hair Back (Pigtails) */}
            <circle cx="20" cy="40" r="14" fill="#3B2314" />
            <circle cx="80" cy="40" r="14" fill="#3B2314" />
            {/* Hairbands */}
            <circle cx="23" cy="40" r="16" stroke="#F43F5E" strokeWidth="3" fill="none" />
            <circle cx="77" cy="40" r="16" stroke="#F43F5E" strokeWidth="3" fill="none" />

            {/* Neck */}
            <rect x="44" y="65" width="12" height="15" rx="3" fill="#FDBA74" />

            {/* Face */}
            <circle cx="50" cy="50" r="26" fill="#FED7AA" />

            {/* Hair Front */}
            <path d="M24 50 C24 24, 76 24, 76 50 C76 34, 24 34, 24 50 Z" fill="#4A2F1B" />
            {/* Cute Bangs */}
            <path d="M 30,38 Q 40,44 50,38 Q 60,44 70,38 Q 72,30 50,28 Q 28,30 30,38 Z" fill="#4A2F1B" />

            {/* Eyes */}
            <circle cx="42" cy="48" r="3" fill="#1E293B" />
            <circle cx="58" cy="48" r="3" fill="#1E293B" />
            {/* Eye Sparkles */}
            <circle cx="43" cy="47" r="1" fill="#FFFFFF" />
            <circle cx="59" cy="47" r="1" fill="#FFFFFF" />

            {/* Cheeks blush */}
            <circle cx="38" cy="54" r="4" fill="#FDA4AF" opacity="0.8" />
            <circle cx="62" cy="54" r="4" fill="#FDA4AF" opacity="0.8" />

            {/* Sweet Smile */}
            <path d="M44 56 Q50 63 56 56" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            
            {/* Cute yellow flower in hair */}
            <g transform="translate(30, 28) scale(0.6)">
              <circle cx="0" cy="0" r="5" fill="#FBBF24" />
              <circle cx="0" cy="-7" r="4" fill="#FFF" />
              <circle cx="6" cy="-3" r="4" fill="#FFF" />
              <circle cx="6" cy="4" r="4" fill="#FFF" />
              <circle cx="0" cy="7" r="4" fill="#FFF" />
              <circle cx="-6" cy="4" r="4" fill="#FFF" />
              <circle cx="-6" cy="-3" r="4" fill="#FFF" />
            </g>
          </svg>
        </div>
      );

    case 'banyu':
    case 'naura':
      return (
        <div className={`relative rounded-full overflow-hidden bg-sky-100 border-4 border-sky-300 shadow-md ${selectedSize} ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Sky */}
            <circle cx="50" cy="50" r="48" fill="#E0F2FE" />
            {/* Soft Clouds background */}
            <path d="M15 65 C20 55, 45 55, 50 65" fill="#FFFFFF" opacity="0.6" />
            <path d="M45 70 C50 60, 75 60, 80 70" fill="#FFFFFF" opacity="0.6" />
            <path d="M 0,100 Q 50,80 100,100" fill="#34D399" opacity="0.4" />

            {/* Neck */}
            <rect x="44" y="65" width="12" height="15" rx="3" fill="#FDBA74" />

            {/* Face */}
            <circle cx="50" cy="50" r="26" fill="#FDBA74" />

            {/* Hair - Cute Bob Cut */}
            <path d="M22 50 C22 22, 78 22, 78 50 L80 65 C80 65, 78 72, 74 65 L70 50 L30 50 L26 65 C22 72, 20 65, 20 65 Z" fill="#1C1917" />
            <path d="M26 38 Q 50 32 74 38" stroke="#1C1917" strokeWidth="3" fill="none" />

            {/* Glasses */}
            <rect x="33" y="44" width="14" height="12" rx="4" stroke="#DC2626" strokeWidth="2.5" fill="none" />
            <rect x="53" y="44" width="14" height="12" rx="4" stroke="#DC2626" strokeWidth="2.5" fill="none" />
            <line x1="47" y1="50" x2="53" y2="50" stroke="#DC2626" strokeWidth="2.5" />

            {/* Eyes behind glasses */}
            <circle cx="40" cy="50" r="2" fill="#1E293B" />
            <circle cx="60" cy="50" r="2" fill="#1E293B" />

            {/* Blush */}
            <circle cx="31" cy="56" r="3.5" fill="#F472B6" opacity="0.6" />
            <circle cx="69" cy="56" r="3.5" fill="#F472B6" opacity="0.6" />

            {/* Happy laughing mouth */}
            <path d="M44 58 Q50 66 56 58 Z" fill="#991B1B" stroke="#991B1B" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'laras':
    case 'nadia':
      return (
        <div className={`relative rounded-full overflow-hidden bg-rose-100 border-4 border-rose-300 shadow-md ${selectedSize} ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Sky */}
            <circle cx="50" cy="50" r="48" fill="#FFF1F2" />
            {/* Hearts floating backdrop */}
            <path d="M25 35 Q25 30 29 32 Q33 30 33 35 Q33 40 29 44 Q25 40 25 35 Z" fill="#FDA4AF" opacity="0.5" />
            <path d="M75 35 Q75 30 79 32 Q83 30 83 35 Q83 40 79 44 Q75 40 75 35 Z" fill="#FDA4AF" opacity="0.5" />
            <path d="M 0,100 Q 50,85 100,100" fill="#FDBA74" opacity="0.3" />

            {/* Neck */}
            <rect x="44" y="66" width="12" height="14" rx="3" fill="#FECDD3" />

            {/* Face */}
            <circle cx="50" cy="50" r="25" fill="#FEE2E2" />

            {/* Long curly hair behind */}
            <path d="M22 50 C20 65, 18 80, 26 82 C34 80, 32 60, 32 50" fill="#78350F" />
            <path d="M78 50 C80 65, 82 80, 74 82 C66 80, 68 60, 68 50" fill="#78350F" />

            {/* Hair Front */}
            <path d="M24 50 C24 23, 76 23, 76 50 C76 34, 24 34, 24 50 Z" fill="#78350F" />
            
            {/* Cute Hair Ribbon */}
            <path d="M34 26 C40 20, 48 28, 50 28 C52 28, 60 20, 66 26 C68 28, 62 34, 50 30 C38 34, 32 28, 34 26 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
            <circle cx="50" cy="28" r="4" fill="#B91C1C" />

            {/* Eyes */}
            <ellipse cx="41" cy="49" rx="2.5" ry="3.5" fill="#1E293B" />
            <ellipse cx="59" cy="49" rx="2.5" ry="3.5" fill="#1E293B" />
            <circle cx="42" cy="47" r="1" fill="#FFFFFF" />
            <circle cx="60" cy="47" r="1" fill="#FFFFFF" />

            {/* Blush */}
            <circle cx="37" cy="55" r="4.5" fill="#FB7185" opacity="0.7" />
            <circle cx="63" cy="55" r="4.5" fill="#FB7185" opacity="0.7" />

            {/* Smile */}
            <path d="M43 56 Q50 62 57 56" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case 'bumi':
    case 'samudra':
      return (
        <div className={`relative rounded-full overflow-hidden bg-emerald-100 border-4 border-emerald-300 shadow-md ${selectedSize} ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Background Sky */}
            <circle cx="50" cy="50" r="48" fill="#D1FAE5" />
            <circle cx="80" cy="25" r="12" fill="#FDE047" opacity="0.6" /> {/* Sun */}
            <path d="M 0,100 Q 50,75 100,100" fill="#3B82F6" opacity="0.4" /> {/* Waves */}

            {/* Neck */}
            <rect x="44" y="65" width="12" height="15" rx="3" fill="#FDBA74" />

            {/* Face */}
            <circle cx="50" cy="50" r="26" fill="#FDBA74" />

            {/* Spiky Hair */}
            <path d="M22 50 C20 40, 30 30, 40 35 C42 22, 58 22, 60 35 C70 30, 80 40, 78 50" fill="#1E293B" />

            {/* Backward Baseball Cap (Brim on the side) */}
            <path d="M28 32 C35 24, 65 24, 72 32 Z" fill="#0EA5E9" stroke="#0369A1" strokeWidth="2" />
            {/* Cap button */}
            <circle cx="50" cy="24" r="3" fill="#FBBF24" />
            {/* Cap brim pointing left */}
            <path d="M28 32 C15 32, 10 38, 20 42 C30 44, 32 36, 28 32 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />

            {/* Eyes (winking joy!) */}
            {/* Left Eye - happy curve */}
            <path d="M37 50 Q41 45 45 50" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Right Eye - wide open */}
            <circle cx="59" cy="49" r="3.5" fill="#1E293B" />
            <circle cx="60" cy="47" r="1" fill="#FFFFFF" />

            {/* Cheeks */}
            <circle cx="36" cy="55" r="3" fill="#F472B6" opacity="0.5" />
            <circle cx="64" cy="55" r="3" fill="#F472B6" opacity="0.5" />

            {/* Excited big smile showing teeth */}
            <path d="M42 56 Q50 68 58 56 Z" fill="#FFF" stroke="#1E293B" strokeWidth="2.5" />
            <path d="M42 56 Q50 68 58 56" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="56" x2="58" y2="56" stroke="#1E293B" strokeWidth="2.5" />
          </svg>
        </div>
      );

    default:
      // Fallback cute standard landscape placeholder matching screenshots exactly
      return (
        <div className={`relative rounded-full overflow-hidden bg-sky-200 border-4 border-white shadow-md ${selectedSize} ${className}`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* sky gradient */}
            <rect width="100" height="100" fill="url(#skyGradient)" />
            {/* Sun */}
            <circle cx="75" cy="30" r="10" fill="#FFFBEB" opacity="0.8" />
            {/* Soft fluffy clouds */}
            <path d="M40 32 C43 25, 57 25, 60 32 C65 30, 72 35, 70 41 C68 47, 32 47, 30 41 C28 35, 35 30, 40 32 Z" fill="#FFFFFF" opacity="0.95" />
            {/* Green Hills */}
            <path d="M0 72 Q25 60 50 72 T100 72 L100 100 L0 100 Z" fill="#70a133" />
            <path d="M0 80 Q35 70 70 82 T100 80 L100 100 L0 100 Z" fill="#5f8c26" opacity="0.8" />
            
            <defs>
              <linearGradient id="skyGradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BAE6FD" />
                <stop offset="1" stopColor="#E0F2FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
  }
};
