export type RSVPStatus =
  | null
  | "hadir"
  | "tentatif"
  | "berhalangan";

  export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;

  startTime: string;
  endTime: string;

  // sementara
  time: string;

  location: string;

  pic: string;
  phone: string;

  attendeeCount: number;
  attendees: number;

  hadir: number;
  tentatif: number;
  berhalangan: number;

  rsvpRequired: boolean;

  myStatus: RSVPStatus;
};


export const eventData : Event[] = [
  {
    id: 1,

    title: "Lomba Kemerdekaan",

    description:
      "Berbagai perlombaan dalam rangka memperingati Hari Kemerdekaan Republik Indonesia.",

    date: "2026-08-17",

    startTime: "08:00",
    endTime: "17:00",

    // sementara untuk kompatibilitas
    time: "08:00",

    location: "Lapangan RT 02",

    pic: "Panitia 17 Agustus",
    phone: "081234567890",

    attendeeCount: 45,
    attendees: 45,

    hadir: 30,
    tentatif: 8,
    berhalangan: 7,

    rsvpRequired: true,

    myStatus: null,
  },

  {
    id: 2,

    title: "Upacara Bendera",

    description:
      "Upacara bendera memperingati Hari Kemerdekaan Republik Indonesia.",

    date: "2026-08-17",

    startTime: "07:00",
    endTime: "08:00",

    time: "07:00",

    location: "Lapangan RT 02",

    pic: "Ketua RT",
    phone: "081234567891",

    attendeeCount: 80,
    attendees: 80,

    hadir: 60,
    tentatif: 10,
    berhalangan: 10,

    rsvpRequired: true,

    myStatus: "hadir",
  },

  {
    id: 3,

    title: "Jalan Santai",

    description:
      "Jalan santai bersama seluruh warga RT dan pembagian doorprize.",

    date: "2026-08-23",

    startTime: "06:00",
    endTime: "09:00",

    time: "06:00",

    location: "Gerbang Utama",

    pic: "Seksi Olahraga",
    phone: "081234567892",

    attendeeCount: 65,
    attendees: 65,

    hadir: 42,
    tentatif: 13,
    berhalangan: 10,

    rsvpRequired: true,

    myStatus: "tentatif",
  },
];