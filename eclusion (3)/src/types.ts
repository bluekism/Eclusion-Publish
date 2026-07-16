export interface Product {
  id: string;
  name: string;
  category: 'Tote Bag' | 'Key Chain' | 'Hat' | 'Socks' | 'Others';
  price: number;
  priceFormatted: string;
  imageKey: 'tote-green' | 'bunny-keychain' | 'tote-teal' | 'yellow-cap' | 'socks-lavender' | 'socks-purple' | 'flower-keychain' | 'sunny-cup';
  imagePath?: string; // Option to link custom files from a folder as requested
  illustrator: string;
  illustratorBio: string;
  illustratorAvatar: string; // Avatar drawing key
  description: string;
  tags: string[];
}

export interface Founder {
  name: string;
  role: string;
  avatarKey: string;
  bio: string;
}

export interface Collaborator {
  name: string;
  role: string;
  avatarKey: string;
  bio: string;
}

export interface ContactInfo {
  platform: 'Instagram' | 'Website' | 'Whatsapp';
  label: string;
  value: string;
  link: string;
}
