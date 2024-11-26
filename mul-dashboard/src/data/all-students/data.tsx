import avatar1 from "/public/user1.jpg";
import avatar2 from "/public/user2.jpg";
import avatar3 from "/public/user3.jpg";
import avatar4 from "/public/user4.jpg";
import avatar5 from "/public/user5.jpg";
import avatar6 from "/public/user6.jpg";
import avatar7 from "/public/user7.jpg";
import avatar8 from "/public/user8.jpg";
import avatar9 from "/public/user9.jpg";

const allStudentsTableData = [
  {
    id: 1,
    avatar: avatar1,
    rollnumber: "12345",
    name: "John Doe",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
  },
  {
    id: 2,
    avatar: avatar2,
    rollnumber: "98463",
    name: "Mary Johson",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
  },
  {
    id: 3,
    avatar: avatar3,
    rollnumber: "35789",
    name: "Solomon Peterson",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
  },
  {
    id: 4,
    avatar: avatar4,
    rollnumber: "24680",
    name: "Michael Brown",
    department: "Physics",
    mobile: "234-567-8901",
    email: "michael.brown@example.com",
    admissiondate: "2023-06-10",
  },
  {
    id: 5,
    avatar: avatar5,
    rollnumber: "13579",
    name: "Emily Wilson",
    department: "Chemistry",
    mobile: "876-543-2109",
    email: "emily.wilson@example.com",
    admissiondate: "2023-05-05",
  },
  {
    id: 6,
    avatar: avatar1,
    rollnumber: "98765",
    name: "David Lee",
    department: "Biology",
    mobile: "543-210-9876",
    email: "david.lee@example.com",
    admissiondate: "2023-04-01",
  },
  {
    id: 7,
    avatar: avatar8,
    rollnumber: "43210",
    name: "Sarah Taylor",
    department: "Psychology",
    mobile: "321-098-7654",
    email: "sarah.taylor@example.com",
    admissiondate: "2023-03-15",
  },
  {
    id: 8,
    avatar: avatar9,
    rollnumber: "98761",
    name: "Kevin Martinez",
    department: "Sociology",
    mobile: "654-321-0987",
    email: "kevin.martinez@example.com",
    admissiondate: "2023-02-28",
  },
  {
    id: 9,
    avatar: avatar5,
    rollnumber: "54329",
    name: "Sophia Garcia",
    department: "History",
    mobile: "890-123-4567",
    email: "sophia.garcia@example.com",
    admissiondate: "2023-01-10",
  },
  {
    id: 10,
    avatar: avatar6,
    rollnumber: "12354",
    name: "Daniel Hernandez",
    department: "English",
    mobile: "123-890-4567",
    email: "daniel.hernandez@example.com",
    admissiondate: "2022-12-25",
  },
  {
    id: 11,
    avatar: avatar8,
    rollnumber: "67892",
    name: "Olivia Perez",
    department: "Art",
    mobile: "890-456-1234",
    email: "olivia.perez@example.com",
    admissiondate: "2022-11-20",
  },
  {
    id: 12,
    avatar: avatar9,
    rollnumber: "24682",
    name: "William Nguyen",
    department: "Geography",
    mobile: "234-890-5678",
    email: "william.nguyen@example.com",
    admissiondate: "2022-10-05",
  },
  {
    id: 13,
    avatar: avatar9,
    rollnumber: "13572",
    name: "Emma Rodriguez",
    department: "Political Science",
    mobile: "876-234-9012",
    email: "emma.rodriguez@example.com",
    admissiondate: "2022-09-01",
  },
  {
    id: 16,
    avatar: avatar1,
    rollnumber: "98763",
    name: "Logan Wong",
    department: "Environmental Science",
    mobile: "654-901-2346",
    email: "logan.wong@example.com",
    admissiondate: "2022-06-05",
  },
  {
    id: 17,
    avatar: avatar2,
    rollnumber: "54328",
    name: "Mia Patel",
    department: "Communications",
    mobile: "890-234-5678",
    email: "mia.patel@example.com",
    admissiondate: "2022-05-01",
  },
  {
    id: 18,
    avatar: avatar3,
    rollnumber: "12357",
    name: "Ethan Wilson",
    department: "Music",
    mobile: "123-567-8901",
    email: "ethan.wilson@example.com",
    admissiondate: "2022-04-15",
  },
  {
    id: 19,
    avatar: avatar4,
    rollnumber: "67894",
    name: "Isabella Gonzalez",
    department: "Drama",
    mobile: "890-567-1234",
    email: "isabella.gonzalez@example.com",
    admissiondate: "2022-03-10",
  },
  {
    id: 20,
    avatar: avatar5,
    rollnumber: "24684",
    name: "Noah Ramirez",
    department: "Physical Education",
    mobile: "234-901-5678",
    email: "noah.ramirez@example.com",
    admissiondate: "2022-02-05",
  },
  {
    id: 21,
    avatar: avatar6,
    rollnumber: "13574",
    name: "Charlotte Lewis",
    department: "Nursing",
    mobile: "876-345-9012",
    email: "charlotte.lewis@example.com",
    admissiondate: "2022-01-01",
  },
  {
    id: 22,
    avatar: avatar7,
    rollnumber: "98767",
    name: "Benjamin Martinez",
    department: "Veterinary Science",
    mobile: "543-901-6789",
    email: "benjamin.martinez@example.com",
    admissiondate: "2021-12-25",
  },
  {
    id: 23,
    avatar: avatar8,
    rollnumber: "43212",
    name: "Amelia Clark",
    department: "Architecture",
    mobile: "321-678-9012",
    email: "amelia.clark@example.com",
    admissiondate: "2021-11-20",
  },
  {
    id: 24,
    avatar: avatar9,
    rollnumber: "98765",
    name: "Henry Thompson",
    department: "Linguistics",
    mobile: "654-901-2345",
    email: "henry.thompson@example.com",
    admissiondate: "2021-10-15",
  },
  {
    id: 27,
    avatar: avatar8,
    rollnumber: "67896",
    name: "Liam Martinez",
    department: "Astronomy",
    mobile: "890-567-2345",
    email: "liam.martinez@example.com",
    admissiondate: "2021-07-01",
  },
  {
    id: 28,
    avatar: avatar4,
    rollnumber: "24686",
    name: "Mila Baker",
    department: "Fashion Design",
    mobile: "234-901-6789",
    email: "mila.baker@example.com",
    admissiondate: "2021-06-15",
  },
  {
    id: 29,
    avatar: avatar6,
    rollnumber: "13576",
    name: "Jackson Carter",
    department: "Criminal Justice",
    mobile: "876-345-9012",
    email: "jackson.carter@example.com",
    admissiondate: "2021-05-10",
  },
];

export default allStudentsTableData;