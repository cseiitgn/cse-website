import officialPortraits from './official-portraits.json';
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
    image: officialPortraits.find((p) => p.name === 'Dr. Supin Gopi')!.path,
  },
  {
    name: 'Mr. Dinesh B. Desai',
    designation: 'Junior Laboratory Assistant',
    emailUser: 'desaidinesh',
    office: '4/307',
    image: officialPortraits.find((p) => p.name === 'Mr. Dinesh B. Desai')!
      .path,
  },
];

export const CSE_STAFF_SOURCE = 'https://iitgn.ac.in/staff';
