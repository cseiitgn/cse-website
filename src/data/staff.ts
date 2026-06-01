export interface StaffMember {
  name: string;
  designation: string;
  emailUser: string;
  office?: string;
  image: string;
}

export const CSE_STAFF: StaffMember[] = [
  {
    name: 'Dr. Supin Gopi',
    designation: 'Assistant Manager (Technical)',
    emailUser: 'supin.gopi',
    image:
      'https://iitgn.ac.in/media/pages/staff/cse/1-supin/3517437127-1767089308/Supin.png',
  },
  {
    name: 'Mr. Dinesh B. Desai',
    designation: 'Junior Laboratory Assistant',
    emailUser: 'desaidinesh',
    office: '4/307',
    image:
      'https://iitgn.ac.in/media/pages/staff/cse/2-dinesh/7eedf1491e-1767089308/dinesh.jpg',
  },
];

export const CSE_STAFF_SOURCE = 'https://iitgn.ac.in/staff';
