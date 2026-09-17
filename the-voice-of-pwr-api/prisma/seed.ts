import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Start seedowania bazy...');

  await prisma.user.upsert({
    where: { mail: process.env.ADMIN_EMAIL! },
    update: {},
    create: {
    name: 'Admin',
    mail: process.env.ADMIN_EMAIL!,
    hashedPass: await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10),
    role: 'ADMIN',
  },
});

  const facultyW4 = await prisma.faculty.create({
    data: { shortcut: 'W4', fullName: 'Wydział Informatyki i Telekomunikacji' },
  });

  const dormT15 = await prisma.dorm.create({
    data: { shortcut: 'T15', fullName: 'Dom Studencki T-15', localization: 'ul. Wittiga 4', capacity: 400 },
  });

  const user = await prisma.user.create({
    data: {
      name: 'Janek',
      mail: 'janek@student.edu.pl',
      hashedPass: await bcrypt.hash('haslo123', 10),
    },
  });

  const fieldOfStudy = await prisma.fieldOfStudy.create({
    data: { shortcut: 'IST', fullName: 'Informatyka Stosowana', facultyShortcut: facultyW4.shortcut },
  });

  const lecturer = await prisma.lecturer.create({
    data: { name: 'Jan', surname: 'Kowalski', mail: 'jan.kowalski@uczelnia.pl' },
  });

  await prisma.lecturerFaculty.create({
    data: { lecturerId: lecturer.id, facultyShortcut: facultyW4.shortcut },
  });

  const course = await prisma.course.create({
    data: {
      fullName: 'Bazy Danych',
      fieldOfStudyShortcut: fieldOfStudy.shortcut,
      coordinatorId: lecturer.id,
      semester: 'Zima 2026',
    },
  });

  await prisma.lecturerClass.create({
    data: { lecturerId: lecturer.id, courseId: course.id },
  });

  await prisma.lecturerOpinion.create({
    data: { userId: user.id, lecturerId: lecturer.id, rating: 5, description: 'Świetnie tłumaczy zagadnienia!' },
  });

  await prisma.courseOpinion.create({
    data: { userId: user.id, courseId: course.id, rating: 4, description: 'Wymagający, ale przydatny przedmiot.' },
  });

  await prisma.dormOpinion.create({
    data: { userId: user.id, dormShortcut: dormT15.shortcut, rating: 3, description: 'Blisko na uczelnię, ale głośno.' },
  });

  console.log('Gotowe! Admin: admin@glospwr.pl / zmien-to-haslo, User: janek@student.edu.pl / haslo123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });