
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'orange' | 'slate' | 'green';
}

export interface Review {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
